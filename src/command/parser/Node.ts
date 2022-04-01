class ANode {
    public next: Node[]

    protected constructor(next: Node[]) {
        this.next = next
    }
}

export class SymbolNode extends ANode {
    public value: string

    public constructor(next: Node[], value: string) {
        super(next)
        this.value = value
    }
}

export class StringNode extends ANode { }

export class NumberNode extends ANode { }

export type CSTNode = SymbolNode | StringNode | NumberNode