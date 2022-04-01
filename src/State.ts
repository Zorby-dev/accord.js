import { Guild } from "discord.js";
import { BotState, StateOptions } from "./BotOptions";

export default class State<TGlobalSTate, TGuildState> {
    private state: BotState<TGlobalSTate, TGuildState>

    public constructor(options: StateOptions<TGlobalSTate, TGuildState>) {
        this.state = {
            global: options.default.global,
            guilds: {}
        }
    }

    public get global() {
        return this.state.global
    }

    public get(guild: Guild) {
        return this.state.guilds[guild.id]
    }
}