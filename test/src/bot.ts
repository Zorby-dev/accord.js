import { Bot } from "../.."

interface Config {

}

interface State {
    eh: string
}

export const bot = new Bot<Config, State, {}>({
    config: {
        path: "./config.json",
        autoSave: true,
        autoSaveRate: 1,
        default: {}
    },
    state: {
        default: {
            global: {
                eh: "dfsf"
            },
            guild: {}
        }
    },
    token: {
        from: "env",
        variable: "TOKEN",
    },
    features: {
        commands: {
            enabled: true,
            folder: "",
            builtin: ["help"]
        },
        errorHandling: {
            enabled: true,
            log: "enabled",
            discordMessage: "pretty"
        }
    },
    eventsFolder: "fdsfdf"
})