class KeyValuePair<T, U> {
    private key: T;
    private val: U;

    public setKeyValue(key: T, val: U) {
        this.key = key;
        this.val = val;
    }

    public display() {
        console.log(`key = ${this.key}, value = ${this.val}`)
    }
}

export default KeyValuePair;

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();