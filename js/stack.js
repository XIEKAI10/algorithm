class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }
  push = (element) => {
    this.items[this.top++] = element;
  };
  pop = (element) => {
    if (this.top === 0) {
      return;
    }
    this.items[this.top--];
  };
  peek = (element) => {
    if (this.top > 0) {
      return this.items[this.top - 1];
    } else {
      return null;
    }
  };
  length = () => {
    return this.top;
  };
  clear = () => {
    delete this.items;
    this.items = [];
    this.top = 0;
  };
}

const stack = new Stack();
stack.push('123');
stack.clear();
console.log(stack);
