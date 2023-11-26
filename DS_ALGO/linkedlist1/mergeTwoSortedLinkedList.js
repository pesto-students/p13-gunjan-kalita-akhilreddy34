function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let newHead = new ListNode(null);
  let currentPointer = newHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentPointer.next = list1;
      list1 = list1.next;
      currentPointer = currentPointer.next;
    } else {
      currentPointer.next = list2;
      list2 = list2.next;
      currentPointer = currentPointer.next;
    }
  }

  if (list1) {
    currentPointer.next = list1;
    list1 = list1.next;
    currentPointer = currentPointer.next;
  }
  if (list2) {
    currentPointer.next = list2;
    list2 = list2.next;
    currentPointer = currentPointer.next;
  }

  newHead = newHead.next;
  return newHead;
};
