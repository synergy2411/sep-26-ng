export class Stack<T> {
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
