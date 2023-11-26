function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let size = findSizeOfList(head);
  let numOfTimesToReverse = Math.floor(size / k);
  let dummyNode = new ListNode(null);
  dummyNode.next = head;
  if (numOfTimesToReverse) {
    for (let i = 0; i < numOfTimesToReverse; i++) {
      if (i == 0) sentHead = reverseList(dummyNode.next, dummyNode, k);
      else sentHead = reverseList(sentHead.next, sentHead, k);
    }
  }
  return dummyNode.next;
};

var findSizeOfList = function (head) {
  let currentNode = head;
  let size = 0;

  while (currentNode) {
    size = size + 1;
    currentNode = currentNode.next;
  }

  return size;
};

var reverseList = function (currentHead, previousNodeOfHead, k) {
  let currentPointer = currentHead;
  let previousPointer = previousNodeOfHead;
  let nextPointer = null;
  let currentCount = 0;
  while (currentPointer && currentCount < k) {
    nextPointer = currentPointer.next;
    currentPointer.next = previousPointer;
    previousPointer = currentPointer;
    currentPointer = nextPointer;
    currentCount = currentCount + 1;
  }
  if (previousNodeOfHead) previousNodeOfHead.next = previousPointer;

  currentHead.next = currentPointer;
  return currentHead;
};
