function Node(el) {
  this.el = el;
  this.next = null;
}

function List() {
  this.head = new Node('head');
  this.find = find;
  this.show = show;
  this.insert = insert;
  this.delete = del;
}

function find(item) {
  let currentNode = this.head;
  while (currentNode && currentNode.el !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function insert(el, item) {
  let itemNode = this.find(el);
  let newNode = new Node(item);
  while (!itemNode) {
    return null;
  }
  newNode.next = itemNode.next;
  itemNode.next = newNode;
  // this.size++;
}

function del(el) {
  let itemNode = this.find(el);
  while (!itemNode) {
    return null;
  }
}

function show() {
  let result = '';
  let currentNode = this.head;
  while (currentNode) {
    result += currentNode.el;
    currentNode = currentNode.next;
    if (currentNode) {
      result += '->';
    }
  }
  console.log(result);
}

let myList = new List();

myList.insert('head', 1);
// myList.del(1);

myList.show();
