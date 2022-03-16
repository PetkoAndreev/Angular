let isOpen: boolean;
isOpen = true;
console.log(isOpen);

class User {
    public name: string;

    constructor
        (name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} says hi!`;
    }
}

const user = new User('Pesho');
console.log(user.sayHello());