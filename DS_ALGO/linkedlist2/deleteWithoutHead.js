var deleteNode = function (node) {
  let current = node;
  let next;
  let temp;
  let prev;

  while (current && current.next) {
    next = current.next;
    temp = current.val;
    current.val = next.val;
    next.val = temp;
    prev = current;
    current = current.next;
  }

  prev.next = null;
};
