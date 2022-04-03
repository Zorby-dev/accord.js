import { IntentsString } from "discord.js"

type Enabled = "enabled"
type Disabled = "disabled"
type Toggle = Enabled | Disabled

export type ConfigOptions<TConfig> = {
    path: string
    default: TConfig
    autoSave: { rate: number } | Disabled
}

export type StateOptions<TGlobalState, TGuildState> = {
    default: {
        global: TGlobalState
        guild: TGuildState
    }
}

export type TokenOptions = { from: "env"; variable: string } | { from: "json"; file: string; path: string }

type BuiltinCommands = "help"
export type FeatureOptions = {
    events: {
        folder: string
    }
    commands:
        | {
              folder: string
              builtin?: BuiltinCommands[]
          }
        | Disabled
    errorHandling?:
        | {
              log?: Toggle
              discordMessage?: Toggle | "pretty"
          }
        | Disabled
}

export type IntentOptions = {
    dm: Toggle
    guild:
        | {
              messages: Toggle
              members: Toggle
              voice: Toggle
              details: Toggle
          }
        | Disabled
}

export type BotOptions<TConfig, TGlobalState, TGuildState> = {
    token: TokenOptions
    intents: IntentOptions
    config: ConfigOptions<TConfig>
    state: StateOptions<TGlobalState, TGuildState>
    features: FeatureOptions
}

interface BotData<GlobalData, GuildData> {
    global: GlobalData
    guilds: {
        [propName: string]: GuildData
    }
}

export type BotState<GlobalState, GuildState> = BotData<GlobalState, GuildState>
export type BotConfig<TConfig> = BotData<TConfig, { [propName: string]: any }>

export function DisorderIntentsToDiscordIntents(intents: IntentOptions): IntentsString[] {
    let discord_intents: IntentsString[] = []

    if (intents.dm == "enabled")
        discord_intents.push("DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING")
    if (intents.guild != "disabled") {
        discord_intents.push("GUILDS")
        if (intents.guild.members == "enabled") discord_intents.push("GUILD_MEMBERS", "GUILD_BANS", "GUILD_PRESENCES")
        if (intents.guild.messages == "enabled")
            discord_intents.push("GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING")
        if (intents.guild.details == "enabled")
            discord_intents.push(
                "GUILD_EMOJIS_AND_STICKERS",
                "GUILD_INTEGRATIONS",
                "GUILD_INVITES",
                "GUILD_SCHEDULED_EVENTS",
                "GUILD_WEBHOOKS"
            )
        if (intents.guild.voice == "enabled") discord_intents.push("GUILD_VOICE_STATES")
    }

    return discord_intents
}
