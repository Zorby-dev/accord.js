/*import { SymbolNode, TreeNode } from "../main/command/parser/Node"
import parse from "../main/command/parser/parse"

const CST = new TreeNode([
    new SymbolNode("help", [new SymbolNode("this", [])]),
    new SymbolNode("halp", [new SymbolNode("thus", [])]),
    new SymbolNode("jaja", []),
    new SymbolNode("juja", [])
])
parse("halp thus", CST)
parse("help", CST)
parse("help thos", CST)
parse("jaja", CST)
parse("jaju", CST)*/

import { config } from "dotenv";
import path from "path";
import bot from "./bot";

config({ path: path.resolve(__dirname, ".env") })

bot.start()