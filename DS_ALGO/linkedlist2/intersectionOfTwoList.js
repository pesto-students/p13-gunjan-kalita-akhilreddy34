var getIntersectionNode = function (headA, headB) {
  let headASize = findSizeOfList(headA);
  let headBSize = findSizeOfList(headB);
  let difference = Math.abs(headASize - headBSize);
  let headAPointer = headA;
  let headBPointer = headB;

  if (headASize < headBSize) {
    let currentCount = 0;

    while (currentCount < difference) {
      currentCount = currentCount + 1;
      headBPointer = headBPointer.next;
    }
  } else if (headBSize < headASize) {
    let currentCount = 0;

    while (currentCount < difference) {
      currentCount = currentCount + 1;
      headAPointer = headAPointer.next;
    }
  }

  while (headAPointer && headBPointer) {
    if (headAPointer === headBPointer) return headAPointer;

    headAPointer = headAPointer.next;
    headBPointer = headBPointer.next;
  }

  return null;
};

var findSizeOfList = function (head) {
  let count = 0;
  let current = head;

  while (current) {
    count = count + 1;
    current = current.next;
  }

  return count;
};
