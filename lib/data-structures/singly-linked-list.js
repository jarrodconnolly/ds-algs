
class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class SinglyLinkedList {
  constructor() {
    this.firstNode = null;
  }

  * [Symbol.iterator]() {
    let currentNode = this.firstNode;
    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }

  addToHead(data) {
    const newNode = new Node(data);
    newNode.next = this.firstNode;
    this.firstNode = newNode;
  }

  addToTail(data) {
    const newNode = new Node(data);
    if (this.firstNode === null) {
      this.firstNode = newNode;
    } else {
      let currentNode = this.firstNode;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  remove(node) {
    let currentNode = this.firstNode;

    if (currentNode === node) {
      this.firstNode = currentNode.next;
    } else {
      while (currentNode.next !== node) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }
  }

  get length() {
    let count = 0;
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      count += 1;
    }
    return count;
  }
}

module.exports = SinglyLinkedList;
