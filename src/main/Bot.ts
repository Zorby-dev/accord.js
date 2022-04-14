import { Client } from "discord.js"
import { readdirSync } from "fs"
import nodepath from "path"
import { BotOptions, AccordIntentsToDiscordIntents, TokenOptions } from "./BotOptions"
import { Command } from "./command/Command"
import { CSTNode, SymbolNode, TreeNode } from "./command/parser/Node"
import parse from "./command/parser/parse"
import Config from "./Config"
import State from "./State"
import { traversePath } from "./util"

export class Bot<TConfig, TGlobalState, TGuildState> {
    public config: Config<TConfig>
    public state: State<TGlobalState, TGuildState>

    private client: Client
    private options: BotOptions<TConfig, TGlobalState, TGuildState>

    private cst = new TreeNode([])

    public constructor(options: BotOptions<TConfig, TGlobalState, TGuildState>) {
        this.config = new Config<TConfig>(options.config)
        this.state = new State<TGlobalState, TGuildState>(options.state)

        this.client = new Client({
            intents: AccordIntentsToDiscordIntents(options.intents)
        })

        this.client.on("messageCreate", (message) => {
            console.log(parse(message.content, this.cst))
        })

        this.options = options
    }

    private retrieveToken(options: TokenOptions): string {
        if (typeof options === "string") {
            return options
        } else {
            if (options.from === "env") {
                const token = process.env[options.variable]

                if (token) {
                    return token
                } else {
                    throw new Error(`Environment variable '${options.variable}' doesn't exist`)
                }
            } else {
                const json = require(options.file)
                const token = traversePath(json, options.property)

                if (token) {
                    return token
                } else {
                    throw new Error(`Property '${options.property}' does not exist on file '${nodepath.resolve(options.file)}'`)
                }
            }
        }
    }

    private log(message: string) {
        if (this.options.features.logger === "enabled") {
            console.log(message)
        }
    }

    private loadCommands(path: string): Command[] {
        let commands: Command[] = []

        readdirSync(path).forEach(file => {
            const command = require(nodepath.resolve(path, file)).default
            const parsed = nodepath.parse(file)

            if (command instanceof Command) {
                commands.push(command)

                this.cst.push(new SymbolNode(parsed.name, []))
            } else {
                console.log(`WARNING: '${file}' is not a command!`)
            }
        })

        return commands
    }

    public start() {
        this.client.login(this.retrieveToken(this.options.token))
        this.log("Connected to discord!")

        const commands = this.options.features.commands
        if (commands !== "disabled") {
            this.loadCommands(commands.folder)
        }
    }
}
