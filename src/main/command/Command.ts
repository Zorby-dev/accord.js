type Argument = {
    name: string
    description?: string

    type: "string" | "number" | "string..."
    optional?: boolean
    multiple?: boolean
}

type BotOptions = {
    aliases?: string[]
    description: string
    category?: string
} & {
    subCommands: Command[]

    arguments: Argument[]
}

export class Command {}
