"use strict";
exports.__esModule = true;
var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
    }
    Box.prototype.add = function (el) {
        this._boxes.push(el);
    };
    Box.prototype.remove = function () {
        this._boxes.pop();
    };
    Box.prototype.getCount = function () {
        return this._boxes.length;
    };
    return Box;
}());
exports["default"] = Box;
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.getCount());
var box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.getCount());
box2.remove();
console.log(box2.getCount());
