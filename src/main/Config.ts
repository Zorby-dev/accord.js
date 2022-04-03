import { Guild } from "discord.js"
import { BotConfig, ConfigOptions } from "./BotOptions"

export default class Config<TConfig> {
    private config: BotConfig<TConfig>
    private autoSaveRate: number = 0
    private autoSaveLoop: NodeJS.Timer | null
    private path: string

    public constructor(options: ConfigOptions<TConfig>) {
        this.config = {
            global: options.default,
            guilds: {}
        }

        this.path = options.path

        if (options.autoSave != "disabled") {
            this.autoSaveRate = options.autoSave.rate
            this.autoSaveLoop = setInterval(() => this.save(), this.autoSaveRate * 3_600_000)
        } else {
            this.autoSaveLoop = null
        }
    }

    public get(guild?: Guild): TConfig {
        const guildConfig = guild && this.config.guilds[guild.id] ? this.config.guilds[guild.id] : {}
        return {
            ...this.config.global,
            ...guildConfig
        }
    }

    public load() {}

    public save() {}
}
