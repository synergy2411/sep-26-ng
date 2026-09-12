// Implicit Types (Preferred)
let x = "Hello World";
console.log(typeof x);

// Explicit Types
let z: number;
z = 100;
// z = "Hola";
console.log("Z : ", z);

// Custom Type
type MyCustomType = {
  firstName: string;
  lastName: string;
};

let user: MyCustomType = {
  firstName: "John",
  lastName: "Doe",
};

// Various Types
let varString: string;
varString = "Who's this?";
// varString = 200;

let varNumber: number;
varNumber = 101;

let varBoolean: boolean;
varBoolean = true;

let varStringArray: Array<string>;
varStringArray = ["A", "B", "C"];

let varTuple: [string, number];
varTuple = ["John", 23];

let varUnion: string | number;
varUnion = "Twenty-Two";
varUnion = 22;

let varAny: any;
varAny = "Hello";
varAny = 202;
varAny = true;

let varUnknown: unknown;
varUnknown = "hello";
if (typeof varUnknown === "string") {
  varUnknown.toUpperCase();
}
varUnknown = 101;
if (typeof varUnknown === "number") {
  varUnknown.valueOf();
}
varUnknown = false;

let add: Function;
add = (a: number, b: number) => a + b;

let mul: (n1: number, n2: number) => number;
mul = (n1: number, n2: number) => n1 * n2;

function throwError(): never {
  throw new Error("Something went wrong");
}

let varUndefined: undefined;
varUndefined = undefined;
// varUndefined = null;

let varNull: null;
varNull = null;
// varNull = undefined;

enum Colors {
  Red,
  Green,
  Blue,
}

let favColor: Colors = Colors.Red;

// Class

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  private static studId: number = 0;
  private age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
    Student.studId++;
  }

  public getDetails() {
    return `ID - ${Student.studId} | Name : ${super.getName()} | Age : ${this.age}`;
  }
}

let monica = new Student("Monica", 21);
console.log(monica.getDetails());

// Abstract Class
abstract class Recipe {
  abstract prepare(): void;
  abstract cook(): void;

  execute() {
    this.prepare();
    this.cook();
  }
}

class Tea extends Recipe {
  prepare(): void {
    console.log("Ready with Tea leafs and water");
  }
  cook(): void {
    console.log("Boil water and put the leafs. Clean up the dishes");
  }
}

class Coffee extends Recipe {
  prepare(): void {
    console.log("Ready with Coffee beans and water");
  }
  cook(): void {
    console.log("Boil water and put the beans. Clean up the dishes");
  }
}

let tea = new Tea();
tea.execute();

let coffee = new Coffee();
coffee.execute();
