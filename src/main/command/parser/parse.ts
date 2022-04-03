import { CSTNode, SymbolNode } from "./Node"
import "../../prototype"

export default function parse(input: string, CST: CSTNode) {
    let index = 0
    let matches = CST.next
    let oldMatches = matches

    console.log(`Matches: ${matches.map(x => (x as SymbolNode).value).join(", ")}\n`)

    for (let char of input) {
        oldMatches = matches

        console.log(`Parsing character '${char}'`)
        for (let match of oldMatches) {
            if (match instanceof SymbolNode) {
                console.log(`Checking match '${match.value}'. Current character: '${match.value[index]}'`)
                if (match.value[index] !== char) {
                    if (matches.remove(match) === -1)
                        console.log(`Match '${match.value}' does not exist!\n`)
                    else
                        console.log(`Removed match '${match.value}'.\nMatches: ${matches.map(x => (x as SymbolNode).value).join(", ")}\n`)
                }
            }
            else {
                console.log("NOT A SYMBOL!!!!")
            }
        }
        index++
    }
    console.log("\n-----\n")
}
