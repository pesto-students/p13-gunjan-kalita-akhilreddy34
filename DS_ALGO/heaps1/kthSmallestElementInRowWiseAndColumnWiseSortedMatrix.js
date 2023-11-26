var kthSmallest = function (matrix, k) {
  const maxHeap = new MaxPriorityQueue();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (maxHeap.size() >= k) {
        if (maxHeap.front().element >= matrix[i][j]) {
          maxHeap.dequeue();
          maxHeap.enqueue(matrix[i][j]);
        }
      } else maxHeap.enqueue(matrix[i][j]);
    }
  }

  return maxHeap.front().element;
};
