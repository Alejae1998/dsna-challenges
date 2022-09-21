class Stack {
  #list = [];

  constructor(list) {
    if (list) this.#list = list;
  }

  //PUSH to add an item to the top of the stack
  push(item) {
    this.#list.push(item);
  }
}

module.exports = { Stack };
