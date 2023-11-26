const queueRearrangement = (queue) => {
  const evenEleQueue = [];
  const oddEleQueue = [];

  while (queue.length) {
    let dequeuedEle = queue.shift();

    if (dequeuedEle % 2 == 0) evenEleQueue.push(dequeuedEle);
    else oddEleQueue.push(dequeuedEle);
  }

  while (oddEleQueue.length) {
    evenEleQueue.push(oddEleQueue.shift());
  }

  return evenEleQueue;
};
