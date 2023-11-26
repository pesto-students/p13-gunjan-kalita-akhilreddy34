let reverseQueueUsingStack = (queue) => {
  let stack = [];

  while (queue.length) {
    stack.push(queue.shift());
  }

  while (stack.length) {
    queue.push(stack.pop());
  }

  return queue;
};
