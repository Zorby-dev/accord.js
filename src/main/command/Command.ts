type Argument = {
    name: string
    description?: string

    type: "string" | "number" | "string..." | "user" | "channel"
    optional?: boolean
    array?: boolean
}

type BotOptions = {
    aliases?: string[]
    description?: string
    category?: string
} & ({
    subCommands: Command[]

    arguments?: Argument[]
    callback?: () => void
} | {
    arguments: Argument[]
    callback: () => void
})

export class Command {
    name: string = ""
    aliases: string[]
    description: string
    category: string | null

    subCommands: Command[]

    arguments: Argument[]
    callback: (() => void) | null

    constructor(options: BotOptions) {
        this.aliases = options.aliases || []
        this.description = options.description || ""
        this.category = options.category || ""

        if ("subCommands" in options) {
            this.subCommands = options.subCommands
        } else {
            this.subCommands = []
        }

        this.arguments = options.arguments || []
        this.callback = options.callback || null
    }
}
