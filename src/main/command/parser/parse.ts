import { CSTNode, SymbolNode } from "./Node"
import "../../prototype"

export default function parse(input: string, CST: CSTNode): boolean {
    let index = 0
    let matches = [...CST.next]

    outer: for (let char of input) {
        for (let match of matches) {
            if (match instanceof SymbolNode) {
                if (char === " ") {
                    if (matches.length !== 1) {
                        return false
                    } else {
                        index = 0
                        matches = match.next
                        continue outer
                    }
                }
                else if (match.value[index] !== char) {
                    if (matches.remove(match) === -1) {
                        throw new Error(`Match '${match}' doesn't exist`)
                    }
                }
            }
            else {
                console.log("NOT A SYMBOL!!!!")
            }
        }
        index++
    }

    if (matches.length !== 1) {
        return false
    } else {
        return true
    }
}
