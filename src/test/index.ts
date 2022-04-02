import { SymbolNode, TreeNode } from "../main/command/parser/Node"
import parse from "../main/command/parser/parse"

const CST = new TreeNode([
    new SymbolNode( "help",
        [
            new SymbolNode("this", [])
        ]
    ),
    new SymbolNode( "halp",
        [
            new SymbolNode("thus", [])
        ]
    ),
    new SymbolNode("jaja", []),
    new SymbolNode("juja", []),
])
parse("halp thus", CST)
parse("holp thos", CST)
parse("hilp thes", CST)
parse("jaju juja", CST)
parse("jaju juje", CST)