function Component1(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log("Inserting the component in the DOM");
  };
}

//decorator factory
type ComponentOptions = {
  selector: string;
};
function Component2(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component2({ selector: "#my-profile" }) // second call
@Pipe // first call
class ProfileComponent {}

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Creature {
  @Log
  say(message: string) {
    console.log("Creature says", message);
  }
}

let creature = new Creature();
creature.say("Hello");

// accessors decorators
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const res = original?.call(this);
    return typeof res === "string" ? res.toUpperCase() : res;
  };
}
class Person2 {
  constructor(public firstname: string, public lastname: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}
const person2 = new Person2("Oleh", "Kliapko");
console.log(person2.fullName);

// property decorators
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters`
          );

        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User2 {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}
const user2 = new User2("1000");
console.log(user2.password);

// parameter decorators
type WatchedParam = {
  methodName: string;
  parameterIndex: number;
};

const watchedParams: WatchedParam[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParams.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log("🚀 ~ watchedParams:", watchedParams);
