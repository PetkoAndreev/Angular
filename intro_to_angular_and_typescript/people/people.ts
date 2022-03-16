abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask)
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" is working on a simple task.");
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers.");
    }
}

export class Manager extends Employee {
    public divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is perparing a quarterly meeting..");
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

const junior = new Junior('Maria', 21);
junior.salary = 1000;
junior.collectSalary();
junior.work();



const senior = new Senior('Pesho', 30);
senior.salary = 4500;
senior.collectSalary();
senior.work();
senior.work();
senior.work();



const manager = new Manager('Pesho The Tiger', 35);
manager.salary = 10000;
manager.divident = 2000;
manager.collectSalary();
manager.work();
manager.work();