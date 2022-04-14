import path from "path"
import { Bot } from "../main"

interface Config {
    prefix: string
}

interface GlobalState {

}
interface GuildState {
    member: string | null
}

const bot = new Bot<Config, GlobalState, GuildState>({
    token: {
        from: "env",
        variable: "TOKEN"
    },

    intents: {
        dm: "disabled",
        guild: {
            messages: "enabled",
            members: "enabled",
            details: "disabled",
            voice: "disabled"
        }
    },

    features: {
        events: {
            folder: "./events"
        },
        commands: {
            folder: path.resolve(__dirname, "commands"),
            builtin: [ "help" ]
        },
        errorHandling: {
            log: "enabled",
            discordMessage: "pretty"
        },
        logger: "enabled"
    },

    config: {
        autoSave: { rate: 2 },
        path: "./config.json",
        default: {
            prefix: "!"
        }
    },
    state: {
        default: {
            global: {},
            guild: {
                member: null
            }
        }
    }
})

export default bot