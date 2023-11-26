const reverseFirstKEleInQueue = (q, k) => {
  // your code here
  let stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(q.pop());
  }
  q.push(null);

  for (let i = 0; i < k; i++) {
    q.push(stack.pop());
  }

  while (q.front_ele() != null) {
    q.push(q.pop());
  }
  q.pop();
  return q;
};
