class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleList {
  constructor(data) {
    this.head = new Node('head');
    this.size = 0;
    this.currentNode = '';
  }

  empty = () => {
    return this.size === 0;
  };

  // 单链表的遍历显示
  show = () => {
    let result = '';
    let currentNode = this.head;
    while (currentNode) {
      result += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode) {
        result += '->';
      }
    }
    console.log(result);
  };

  // 获取单链表最后一个节点
  getLastNode = () => {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  // 尾部添加
  append = (element) => {
    let last = this.getLastNode();
    let newNode = new Node(element);
    last.next = newNode;
    this.size++;
  };

  // 查找元素
  find = (item) => {
    let currentNode = this.head;
    console.log(currentNode);
    while (currentNode && currentNode.data !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  // 插入元素
  insert = (item, element) => {
    let itemNode = this.find(item);
    let newNode = new Node(element);
    while (!itemNode) {
      return null;
    }
    newNode.next = itemNode.next;
    itemNode.next = newNode;
    this.size++;
  };

  // 删除元素
  delete = (item) => {
    let itemNode = this.find(item);
    while (!itemNode) {
      return null;
    }
    if (itemNode.data === 'head') {
      if (!this.empty()) {
        return;
      } else {
        this.head.next = null;
        return;
      }
    }
    let currentNode = this.head;
    while (currentNode.next.data !== item) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    this.size--;
  };
  clear = () => {
    this.head.next = null;
    this.size = 0;
  };
}
let myList = new SingleList();
let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  myList.append(arr[i]);
}

myList.show();
