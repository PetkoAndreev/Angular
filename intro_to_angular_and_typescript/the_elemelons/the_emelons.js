"use strict";
// Create classes Watermelon, Firemelon, Earthmelon, Airmelon. Each of them should inherit the abstract class Melon and its functionality. 
// Aside from the abstract functionality, each of the Elemelons should have property elementIndex (Number), which is equal to its weight * the string length of its melonSort. 
// The property should have only a getter.
// All of the classes should hold a toString() function, which returns the following result for them:
// “Element: {Water/Fire/Earth/Air}”
// “Sort: {elemelonSort}”
// “Element Index: {elemelonElementIndex}”
// Create one more class which is called Melolemonmelon, which inherits one of the 4 elemelons, regardless of which. 
// The Melolemonmelon has no element, but it can morph into any of the others. Implement a function morph(), which changes the current element of the Melolemonmelon, 
// each time it is called. 
// Upon initialization, the initial element is Water. From then it should go in the following order: Fire, Earth, Air, Water, Fire… and so on.
// The toString() function should remain the same as its parent class.
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
exports.Melolemonmelon = exports.Airmelon = exports.Earthmelon = exports.Firemelon = exports.Watermelon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = '';
    }
    Melon.prototype.getElementIndex = function () {
        return this.elementIndex;
    };
    Melon.prototype.toString = function () {
        console.log("Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex));
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Water';
        return _this;
    }
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Fire';
        return _this;
    }
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Earth';
        return _this;
    }
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Air';
        return _this;
    }
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = 'Water';
        _this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        _this.index = 0;
        return _this;
    }
    Melolemonmelon.prototype.morph = function (index) {
        this.element = this.elements[index];
        console.log("This element is set to ".concat(this.element));
    };
    return Melolemonmelon;
}(Melon));
exports.Melolemonmelon = Melolemonmelon;
var watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());
var earthmelon = new Earthmelon(10.5, 'Large');
console.log(earthmelon.toString());
var firemelon = new Firemelon(8.5, 'Normal');
console.log(firemelon.toString());
var airmelon = new Airmelon(20.5, 'Very Large Kingsize');
console.log(airmelon.toString());
var melolemonmelon = new Melolemonmelon(10.5, 'Special');
melolemonmelon.morph(1);
console.log(melolemonmelon.toString());
var melolemonmelon1 = new Melolemonmelon(10.5, 'Cons');
melolemonmelon1.morph(0);
console.log(melolemonmelon1.toString());
var melolemonmelon2 = new Melolemonmelon(10.5, 'Unique');
melolemonmelon2.morph(2);
console.log(melolemonmelon2.toString());
var melolemonmelon3 = new Melolemonmelon(10.5, 'Cool');
melolemonmelon3.morph(3);
console.log(melolemonmelon3.toString());
