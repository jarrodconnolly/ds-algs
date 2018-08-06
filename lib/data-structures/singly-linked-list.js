
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

  removeByNode(node) {
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

  removeByData(data) {
    let currentNode = this.firstNode;
    let previousNode = null;

    // case for removing head node
    if (currentNode !== null && currentNode.data === data) {
      this.firstNode = currentNode.next;
      return;
    }

    // iterate through nodes looking for the data
    while (currentNode !== null && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    // data was not found
    if (currentNode === null) {
      return;
    }

    // point previous node next to current nodes next
    previousNode.next = currentNode.next;
  }

  findNodeByData(data) {
    let currentNode = this.firstNode;

    // iterate through nodes
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    // node was not found
    return null;
  }

  findMiddleNode() {
    let slowNode = this.firstNode;
    let fastNode = this.firstNode;

    if (this.firstNode === null) {
      return null;
    }

    while (fastNode !== null && fastNode.next !== null) {
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
    }

    return slowNode;
  }

  // Floyd's cycle-finding algorithm
  hasLoopFloyd() {
    let slowNode = this.firstNode;
    let fastNode = this.firstNode;

    while (slowNode !== null && fastNode !== null && fastNode.next !== null) {
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
      if (slowNode === fastNode) {
        return true;
      }
    }
    return false;
  }

  // Brent's cycle-finding algorithm
  hasLoopBrent() {
    let slowNode = this.firstNode;
    let fastNode = this.firstNode;

    let count = 0;
    let limit = 2;

    while (fastNode !== null) {
      fastNode = fastNode.next;
      count += 1;

      if (fastNode === slowNode) {
        return true;
      }

      if (count === limit) {
        count = 0;
        limit *= 2;
        slowNode = fastNode;
      }
    }

    return false;
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
