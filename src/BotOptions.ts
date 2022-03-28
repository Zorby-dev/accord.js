type Enabled = "enabled"
type Disabled = "disabled"
type Toggle = Enabled | Disabled

export type ConfigOptions<TConfig> = { path: string, default: TConfig }
    & (({ autoSave: true, autoSaveRate: number }) | ({ autoSave: false }))

export type StateOptions<TGlobalState, TGuildState> = {
    default: {
        global: TGlobalState
        guild: TGuildState
    }
}

export type TokenOptions = { from: "env", variable: string }
    | { from: "json", file: string, path: string }

type BuiltinCommands = "help"
export type FeatureOptions = ({
    commands: {
        enabled: true
        folder: string
        builtin?: BuiltinCommands[]
    },
} | { commands: { enabled: false } }) & ({
    errorHandling?: {
        enabled: true
        log?: Toggle
        discordMessage?: Toggle | "pretty"
    }
} | { errorHandling?: { enabled: false } })

export type BotOptions<TConfig, TGlobalState, TGuildState> = {
    config: ConfigOptions<TConfig>
    state: StateOptions<TGlobalState, TGuildState>
    token: TokenOptions
    features: FeatureOptions
    eventsFolder: string
}

interface BotData<GlobalData, GuildData> {
    global: GlobalData,
    guilds: {
        [propName: string]: GuildData
    }
}

export type BotState<GlobalState, GuildState> = BotData<GlobalState, GuildState>
export type BotConfig<TConfig> = BotData<TConfig, { [propName: string]: any }>