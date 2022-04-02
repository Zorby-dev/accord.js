import { CSTNode, SymbolNode } from "./Node";

function matchAgainst(char: string, CST: CSTNode){

}

export default function parse(input: string, CST: CSTNode){

    let index: number = 0
    let nodeOption = CST.next
    let nodeOptionOld = nodeOption 
    for(let char of input){
        nodeOptionOld = nodeOption
        nodeOption = []
        for(let child of nodeOptionOld){
            if(child instanceof SymbolNode){
                if(char === " "){
                    if(nodeOption.length != 1){
                        console.log("Error")
                        return
                    }
                    nodeOption = child.next
                    console.log(child)
                    index = 0
                    continue
                }
                else if(char === child.value[index]){
                    nodeOption.push(child)
                }
            }
        }
        index++    
    }
}