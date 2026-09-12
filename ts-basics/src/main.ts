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

interface User {
  firstName: string;
  lastName: string;
}

let userA: User = {
  firstName: "John",
  lastName: "Doe",
};

// GENERIC FUNCTION

function addAtBeginning<T>(item: T, collection: Array<T>): Array<T> {
  return [item, ...collection];
}

let marks = [99, 95, 91, 89, 90];
const updatedMarks = addAtBeginning<number>(85, marks);
console.log(typeof updatedMarks[0]); // 'number'

let friends = ["Monica", "Ross", "Joey", "Rachel"];
const updatedFriends = addAtBeginning<string>("Chandler", friends);
console.log(typeof updatedFriends[0]); // 'string'

// GENERIC CLASS
class Stack<T> {
  private list: T[] = [];

  add(value: T) {
    this.list.push(value);
  }

  getAll(): T[] {
    return this.list.slice(0);
  }

  remove() {
    this.list.pop();
  }
}

let numberList = new Stack<number>();
numberList.add(101);
numberList.add(102);
numberList.add(103);
console.log(numberList.getAll());
numberList.remove();
console.log(numberList.getAll());

let stringList = new Stack<string>();

let userList = new Stack<User>();

userList.add({ firstName: "Monica", lastName: "Geller" });
userList.add({ firstName: "Ross", lastName: "Geller" });
userList.add({ firstName: "Rachel", lastName: "Green" });

console.log(userList.getAll());

// GENERIC INTERFACE
interface Resource<T, K> {
  resourceName: T;
  resourceLocation: K;
}

let serverOne: Resource<string, number> = {
  resourceName: "Server One",
  resourceLocation: 12.34,
};

let user2 = {
  firstName: "Monica",
  lastName: "Geller",
  age: 21,
  address: "201, Main Road, Pune",
};

function demoFn<T extends { firstName: string; lastName: string }>(user: T) {
  console.log("User : ", user);
}

demoFn<User>(user2);
