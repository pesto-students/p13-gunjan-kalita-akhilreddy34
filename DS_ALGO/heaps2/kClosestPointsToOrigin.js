var kClosest = function (points, k) {
  let distance;
  let maxHeap = new MaxPriorityQueue();
  const origin = [0, 0];
  let x1 = origin[0];
  let y1 = origin[1];
  let x2;
  let y2;
  points.forEach((point) => {
    (x2 = point[0]), (y2 = point[1]);
    distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

    if (maxHeap.size() >= k) {
      if (maxHeap.front().priority > distance) {
        maxHeap.dequeue();
        maxHeap.enqueue(point, distance);
      }
    } else maxHeap.enqueue(point, distance);
  });

  let res = [];
  while (maxHeap.size()) {
    res.push(maxHeap.dequeue().element);
  }

  return res;
};
