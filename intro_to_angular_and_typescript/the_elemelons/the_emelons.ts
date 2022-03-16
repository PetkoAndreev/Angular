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

abstract class Melon {
    public weight: number;
    public melonSort: string;
    public elementIndex: number;
    protected element: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = '';
    }

    public getElementIndex() {
        return this.elementIndex;
    }

    public toString(): void {
        console.log(`Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`);
    }
}

export class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

export class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

export class Melolemonmelon extends Melon {
    private elements: string[];
    private index: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
        this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        this.index = 0;
    }

    public morph(index: number): void {
        this.element = this.elements[index];
        console.log(`This element is set to ${this.element}`);
    }
}


let watermelon: Watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());

let earthmelon: Earthmelon = new Earthmelon(10.5, 'Large');
console.log(earthmelon.toString());

let firemelon: Firemelon = new Firemelon(8.5, 'Normal');
console.log(firemelon.toString());

let airmelon: Airmelon = new Airmelon(20.5, 'Very Large Kingsize');
console.log(airmelon.toString());

let melolemonmelon: Melolemonmelon = new Melolemonmelon(10.5, 'Special');
melolemonmelon.morph(1);
console.log(melolemonmelon.toString());

let melolemonmelon1: Melolemonmelon = new Melolemonmelon(10.5, 'Cons');
melolemonmelon1.morph(0);
console.log(melolemonmelon1.toString());

let melolemonmelon2: Melolemonmelon = new Melolemonmelon(10.5, 'Unique');
melolemonmelon2.morph(2);
console.log(melolemonmelon2.toString());

let melolemonmelon3: Melolemonmelon = new Melolemonmelon(10.5, 'Cool');
melolemonmelon3.morph(3);
console.log(melolemonmelon3.toString());