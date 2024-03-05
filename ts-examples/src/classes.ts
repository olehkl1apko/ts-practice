class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

let account = new Account(1, "Oleh", 0);

// index signatures in classes
class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Oleh";
seats["A1"] = "Oleh";
seats.A2 = "Luda";

// static vars in classes
class Ride {
  private static _activeRides: number = 0; // static is  a global var in class like a accumulator

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    // must be static too
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
// console.log(Ride.activeRides);

// overriding the method of parent class
class Person {
  constructor(public firstname: string, public lastname: string) {
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
  constructor(
    public readonly studentId: number,
    firstname: string,
    lastname: string
  ) {
    super(firstname, lastname);
  }

  takeTest() {
    console.log("Tacking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Director extends Person {
  override get fullName() {
    return "Director " + super.fullName;
  }
}

//polymorphism
function printNames(people: Person[]) {
  for (const person of people) {
    console.log(person.fullName);
  }
}
printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Oleh", "Kliapko"),
  new Director("Ali", "Baba"),
]);

//abstract class - methods with NO implementation
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle1 extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}
