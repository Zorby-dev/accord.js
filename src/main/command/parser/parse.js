"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
function matchAgainst(char, CST) {
}
function parse(input, CST) {
    var index = 0;
    var nodeOption = CST.next;
    var nodeOptionOld = nodeOption;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        nodeOptionOld = nodeOption;
        nodeOption = [];
        for (var _a = 0, nodeOptionOld_1 = nodeOptionOld; _a < nodeOptionOld_1.length; _a++) {
            var child = nodeOptionOld_1[_a];
            if (child instanceof Node_1.SymbolNode) {
                if (char === " ") {
                    if (nodeOption.length != 1) {
                        console.log("Error");
                        return;
                    }
                    nodeOption = child.next;
                    console.log(child);
                }
                if (char === child.value[index]) {
                    nodeOption.push(child);
                }
            }
        }
        index++;
    }
}
exports["default"] = parse;
