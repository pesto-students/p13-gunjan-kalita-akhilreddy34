let obj = {};

let sortTheList = (head) => {
  scanTheList(head);
  let current = head;
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      current.data = key;
      current = current.next;
    }
  }
  return head;
};

let scanTheList = (head) => {
  let current = head;

  while (current) {
    if (obj[current.data]) {
      obj[current.data] = obj[current.data] + 1;
    } else {
      obj[current.data] = 1;
    }
    current = current.next;
  }
};
