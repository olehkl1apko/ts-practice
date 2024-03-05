"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
let box = {
    drag: () => { },
    resize: () => { },
};
let size = "cm";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
}
let account = new Account(1, "Oleh", 0);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Oleh";
seats["A1"] = "Oleh";
seats.A2 = "Luda";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstname + " " + this.lastname;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstname, lastname) {
        super(firstname, lastname);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Tacking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Director extends Person {
    get fullName() {
        return "Director " + super.fullName;
    }
}
printNames([
    new Student(1, "John", "Smith"),
    new Teacher("Oleh", "Kliapko"),
    new Director("Ali", "Baba"),
]);
function printNames(people) {
    for (const person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new Pair(1, "a");
function fetch(url) {
    if (!url)
        return { data: null, error: null };
    return { data: null, error: null };
}
let res1 = fetch("https://somesite.com/users");
(_a = res1.data) === null || _a === void 0 ? void 0 : _a.name;
let res2 = fetch("https://somesite.com/products");
(_b = res2.data) === null || _b === void 0 ? void 0 : _b.title;
function echo(value) {
    return value;
}
echo({ name: "Oleh" });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        if (category)
            return [
                {
                    title: "T",
                    price: 2,
                },
            ];
        return [];
    }
}
class Shop {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
const shop = new Shop();
shop.add({ title: "a", price: 1 });
shop.find("title", "a");
shop.find("price", 1);
let user = {
    name: "Ted",
    age: 23,
};
function Component1(constructor) {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
        console.log("Inserting the component in the DOM");
    };
}
function Component2(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDom = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component2({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Creature {
    say(message) {
        console.log("Creature says", message);
    }
}
__decorate([
    Log
], Creature.prototype, "say", null);
let creature = new Creature();
creature.say("Hello");
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const res = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof res === "string" ? res.toUpperCase() : res;
    };
}
class Person2 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
__decorate([
    Capitalize
], Person2.prototype, "fullName", null);
const person2 = new Person2("Oleh", "Kliapko");
console.log(person2.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User2 {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User2.prototype, "password", void 0);
const user2 = new User2("1000");
console.log(user2.password);
const watchedParams = [];
function Watch(target, methodName, parameterIndex) {
    watchedParams.push({
        methodName,
        parameterIndex,
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log("🚀 ~ watchedParams:", watchedParams);
//# sourceMappingURL=index.js.map