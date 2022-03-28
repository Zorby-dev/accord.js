import { Client } from "discord.js";
import { BotState, BotOptions } from "./BotOptions";
import Config from "./Config";

export class Bot<TConfig, GlobalState, GuildState> {
    public config: Config<TConfig>
    public state: BotState<GlobalState, GuildState>

    private client: Client

    public constructor(options: BotOptions<TConfig, GlobalState, GuildState>) {
        this.config = new Config<TConfig>(options.config)

        this.state = {
            guilds: {},
            global: options.state.default.global
        }

        this.client = new Client({
            intents: [

            ]
        })
    }

    public start() {

    }
}