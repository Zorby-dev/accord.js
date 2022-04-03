import { Client } from "discord.js"
import { BotOptions, DisorderIntentsToDiscordIntents } from "./BotOptions"
import Config from "./Config"
import State from "./State"

export class Bot<TConfig, TGlobalState, TGuildState> {
    public config: Config<TConfig>
    public state: State<TGlobalState, TGuildState>

    private client: Client

    public constructor(options: BotOptions<TConfig, TGlobalState, TGuildState>) {
        this.config = new Config<TConfig>(options.config)
        this.state = new State<TGlobalState, TGuildState>(options.state)

        this.client = new Client({
            intents: DisorderIntentsToDiscordIntents(options.intents)
        })
    }

    public start() {}
}
