"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NumberNode = exports.StringNode = exports.SymbolNode = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(next) {
        this.next = next;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var SymbolNode = /** @class */ (function (_super) {
    __extends(SymbolNode, _super);
    function SymbolNode(value, next) {
        var _this = _super.call(this, next) || this;
        _this.value = value;
        return _this;
    }
    return SymbolNode;
}(TreeNode));
exports.SymbolNode = SymbolNode;
var StringNode = /** @class */ (function (_super) {
    __extends(StringNode, _super);
    function StringNode(next, spaces) {
        var _this = _super.call(this, next) || this;
        _this.spaces = spaces;
        return _this;
    }
    return StringNode;
}(TreeNode));
exports.StringNode = StringNode;
var NumberNode = /** @class */ (function (_super) {
    __extends(NumberNode, _super);
    function NumberNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumberNode;
}(TreeNode));
exports.NumberNode = NumberNode;
