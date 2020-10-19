const LinkedListNode = require('./linked-list-node');

class SinglyLinkedList {
  constructor(head = null) {
    this.firstNode = head;
  }

  * [Symbol.iterator]() {
    let currentNode = this.firstNode;
    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }

  addToHead(data) {
    const newNode = new LinkedListNode(data);
    newNode.next = this.firstNode;
    this.firstNode = newNode;
  }

  addToTail(data) {
    const newNode = new LinkedListNode(data);
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

  findMiddleNode(head) {
    return this.findMiddleNodeImpl(head || this.firstNode);
  }

  // eslint-disable-next-line class-methods-use-this
  findMiddleNodeImpl(head) {
    if (head === null) {
      return head;
    }

    let slowNode = head;
    let fastNode = head;

    while (fastNode.next !== null && fastNode.next.next !== null) {
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

  // reverse list using a stack
  // Time: O(n) Space: O(n)
  reverseUsingStack() {
    const stack = [];
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      stack.push(currentNode.data);
      currentNode = currentNode.next;
    }

    this.firstNode = null;
    currentNode = stack.pop();
    while (currentNode !== undefined) {
      this.addToTail(currentNode);
      currentNode = stack.pop();
    }
  }

  // reverse list using no extra memory
  // Time: O(n) Space: O(1)
  reverseInPlace() {
    let currentNode = this.firstNode;
    let previousNode = null;
    let nextNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.next;

      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.firstNode = previousNode;
  }

  mergeSortedNodes(left, right) {
    let result = null;

    if (left === null) {
      return right;
    }
    if (right === null) {
      return left;
    }

    if (left.data <= right.data) {
      result = left;
      result.next = this.mergeSortedNodes(left.next, right);
    } else {
      result = right;
      result.next = this.mergeSortedNodes(left, right.next);
    }

    return result;
  }

  mergeSort(head) {
    if (head === null || head.next === null) {
      return head;
    }

    const middle = this.findMiddleNodeImpl(head);
    const nextToMiddle = middle.next;
    middle.next = null;

    const left = this.mergeSort(head);
    const right = this.mergeSort(nextToMiddle);

    return this.mergeSortedNodes(left, right);
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

  get head() {
    return this.firstNode;
  }
}

module.exports = SinglyLinkedList;
