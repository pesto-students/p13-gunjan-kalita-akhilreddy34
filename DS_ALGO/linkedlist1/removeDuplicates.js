var deleteDuplicates = function (head) {
  if (head) {
    const hashSet = new Set();
    hashSet.add(head.val);
    let currentNode = head.next;
    let previousNode = head;

    while (currentNode) {
      if (hashSet.has(currentNode.val)) {
        previousNode.next = currentNode.next;
      } else {
        hashSet.add(currentNode.val);
        previousNode = currentNode;
      }

      currentNode = currentNode.next;
    }
  }

  return head;
};
