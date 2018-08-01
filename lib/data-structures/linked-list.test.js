const LinkedList = require('./linked-list');

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
    list.remove(list.firstNode);
    expect(Array.from(list)).toEqual([20, 30]);
  });

  test('Remove mid node', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.remove(list.firstNode.next);
    expect(Array.from(list)).toEqual([10, 30]);
  });

  test('Remove tail node', () => {
    const list = new LinkedList();
    list.addToTail(10);
    list.addToTail(20);
    list.addToTail(30);
    list.remove(list.firstNode.next.next);
    expect(Array.from(list)).toEqual([10, 20]);
  });
});