/**
 * @class LinkedListNode
 */
class LinkedListNode {
  /**
   * @param {*} data - Data held by the node.
   * @param {LinkedListNode} next - Link to the next node in the list.
   */
  constructor(data = null, next = null) {
    /**
     * @property {*} - Data held by the node.
     */
    this.data = data;
    /**
     * @property {LinkedListNode} - Link to the next node in the list.
     */
    this.next = next;
  }
}

module.exports = LinkedListNode;
