class Box<T> {
    private _boxes = [];

    public add(el: T) {
        this._boxes.push(el);
    }

    public remove() {
        this._boxes.pop();
    }

    getCount(): number {
        return this._boxes.length;
    }
}


export default Box;

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.getCount());


let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.getCount());
box2.remove();
console.log(box2.getCount());