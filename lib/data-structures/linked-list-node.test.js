const Node = require('./linked-list-node');

describe('Singly Linked List Node', () => {
  describe('Basic', () => {
    test('Instantiate empty Node', () => {
      const node = new Node();
      expect(node).toBeDefined();
      expect(node.data).toBeNull();
      expect(node.next).toBeNull();
    });
    test('Instantiate Node with data', () => {
      const node = new Node(5);
      expect(node.data).toBe(5);
      expect(node.next).toBeNull();
    });
    test('Instantiate Node with next', () => {
      const node = new Node(5);
      const node2 = new Node(10, node);
      expect(node2.data).toBe(10);
      expect(node2.next).toBeDefined();
      expect(node2.next.data).toBe(5);
    });
  });
});
