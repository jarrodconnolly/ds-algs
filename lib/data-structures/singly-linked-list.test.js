const LinkedList = require('./singly-linked-list');

describe('Linked List', () => {
  test('Instantiate LinkedList', () => {
    const list = new LinkedList();
    expect(list).toBeDefined();
  });

  test('Add to head', () => {
    const list = new LinkedList();
    list.addToHead(10);
    list.addToHead(20);
    list.addToHead(30);
    expect(Array.from(list)).toEqual([30, 20, 10]);
  });

  test('Add to tail', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    expect(Array.from(list)).toEqual([10, 20, 30]);
  });

  test('Remove head node', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.removeByNode(list.firstNode);
    expect(Array.from(list)).toEqual([20, 30]);
  });

  test('Remove mid node', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.removeByNode(list.firstNode.next);
    expect(Array.from(list)).toEqual([10, 30]);
  });

  test('Remove tail node', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.removeByNode(list.firstNode.next.next);
    expect(Array.from(list)).toEqual([10, 20]);
  });

  test('Remove head node by data', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.removeByData(10);
    expect(Array.from(list)).toEqual([20, 30]);
  });

  test('Remove mid node by data', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.removeByData(20);
    expect(Array.from(list)).toEqual([10, 30]);
  });

  test('Remove tail node by data', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.removeByData(30);
    expect(Array.from(list)).toEqual([10, 20]);
  });

  test('Remove duplicated node by data', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.addToTail(20);
    list.removeByData(20);
    expect(Array.from(list)).toEqual([10, 30, 20]);
  });

  test('Remove nonexistent node by data', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.removeByData(40);
    expect(Array.from(list)).toEqual([10, 20, 30]);
  });

  test('Length is correct', () => {
    const list = new LinkedList();
    expect(list.length).toEqual(0);

    list.addToTail(10);
    expect(list.length).toEqual(1);

    list.addToTail(20);
    expect(list.length).toEqual(2);

    list.addToTail(30);
    expect(list.length).toEqual(3);

    list.removeByNode(list.firstNode);
    expect(list.length).toEqual(2);

    list.removeByNode(list.firstNode);
    expect(list.length).toEqual(1);

    list.removeByNode(list.firstNode);
    expect(list.length).toEqual(0);
  });

  test('Find node by data', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);

    const node1 = list.findNodeByData(10);
    expect(node1.data).toEqual(10);

    const node2 = list.findNodeByData(20);
    expect(node2.data).toEqual(20);

    const node3 = list.findNodeByData(30);
    expect(node3.data).toEqual(30);

    const node4 = list.findNodeByData(40);
    expect(node4).toBeNull();
  });

  test('Find middle node', () => {
    const list = new LinkedList();
    let middle = list.findMiddleNode();
    expect(middle).toBeNull();

    list.addToTail(10);
    middle = list.findMiddleNode();
    expect(middle.data).toEqual(10);

    list.addToTail(20);
    middle = list.findMiddleNode();
    expect(middle.data).toEqual(20);

    list.addToTail(30);
    middle = list.findMiddleNode();
    expect(middle.data).toEqual(20);
  });

  test('Check for loop Floyd\'s', () => {
    const list = new LinkedList();

    // no loop
    let hasLoop = list.hasLoopFloyd();
    expect(hasLoop).toEqual(false);

    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);

    // no loop
    hasLoop = list.hasLoopFloyd();
    expect(hasLoop).toEqual(false);

    // connect tail to head, odd number of nodes
    list.findNodeByData(30).next = list.firstNode;
    hasLoop = list.hasLoopFloyd();
    expect(hasLoop).toEqual(true);

    // connect tail to head, even number of nodes
    list.findNodeByData(30).next = null;
    list.addToTail(40);
    list.findNodeByData(40).next = list.firstNode;
    hasLoop = list.hasLoopFloyd();
    expect(hasLoop).toEqual(true);
  });

  test('Check for loop Brent\'s', () => {
    const list = new LinkedList();

    // no loop
    let hasLoop = list.hasLoopBrent();
    expect(hasLoop).toEqual(false);

    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);

    // no loop
    hasLoop = list.hasLoopBrent();
    expect(hasLoop).toEqual(false);

    // connect tail to head, odd number of nodes
    list.findNodeByData(30).next = list.firstNode;
    hasLoop = list.hasLoopBrent();
    expect(hasLoop).toEqual(true);

    // connect tail to head, even number of nodes
    list.findNodeByData(30).next = null;
    list.addToTail(40);
    list.findNodeByData(40).next = list.firstNode;
    hasLoop = list.hasLoopBrent();
    expect(hasLoop).toEqual(true);
  });
});
