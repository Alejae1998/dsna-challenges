class Stack {
  #list = [];

  constructor(list) {
    if (list) this.#list = list;
  }

  //PUSH to add an item to the top of the stack
  push(item) {
    this.#list.push(item);
  }
  pop() {
    if (this.#list.length === 0) {
      return null;
    } else {
      this.#list.pop();
      return this.#list;
    }
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Stack };
