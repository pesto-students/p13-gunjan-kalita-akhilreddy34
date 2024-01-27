var isPalindrome = function (head) {
  let middleNode = findMiddleElement(head);
  let head2 = middleNode.next;
  middleNode.next = null;
  head2 = reverseList(head2);

  let pointer1 = head;
  let pointer2 = head2;

  while (pointer1 && pointer2) {
    if (pointer1.val === pointer2.val) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    } else return false;
  }

  return true;
};

var findMiddleElement = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  while (
    slowPointer &&
    fastPointer &&
    fastPointer.next &&
    fastPointer.next.next
  ) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};

var reverseList = function (head) {
  let current = head;
  let previous = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
