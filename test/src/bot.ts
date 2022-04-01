import { Bot } from "../.."

interface Config {
    prefix: string
}

interface GlobalState {
    joinedChannels: string[]
}

export const bot = new Bot<Config, GlobalState, {}>({
    config: {
        path:     "./config.json",
        autoSave: "disabled",
        default: {
            prefix: "!",
        },
    },
    state: {
        default: {
            global: {
                joinedChannels: [],
            },
            guild: {},
        },
    },
    token: {
        from:     "env",
        variable: "TOKEN",
    },
    features: {
        events: { folder: "fsdfsdf" },
        commands: {
            folder:  "",
            builtin: ["help"],
        },
        errorHandling: {
            log:            "enabled",
            discordMessage: "pretty",
        },
    },
    intents: {
        dm: "disabled",
        guild: {
            messages: "enabled",
            members:  "disabled",
            details:  "disabled",
            voice:    "disabled",
        },
    }
})