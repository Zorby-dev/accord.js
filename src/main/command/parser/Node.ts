export class TreeNode {
    public next: CSTNode[]

    public constructor(next: CSTNode[]) {
        this.next = next
    }

    public push(...node: CSTNode[]) {
        this.next.push(...node)
    }
}

export class SymbolNode extends TreeNode {
    public value: string

    public constructor(value: string, next: CSTNode[]) {
        super(next)
        this.value = value
    }
}

export class StringNode extends TreeNode {
    public spaces: boolean
    public constructor(next: CSTNode[], spaces: boolean) {
        super(next)
        this.spaces = spaces
    }
}

export class NumberNode extends TreeNode {}

export type CSTNode = SymbolNode | StringNode | NumberNode | TreeNode
