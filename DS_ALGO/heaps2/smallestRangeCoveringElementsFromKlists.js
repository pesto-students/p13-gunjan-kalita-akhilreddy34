var smallestRange = function (nums) {
  let minRange = Number.POSITIVE_INFINITY;
  let maxRange = Number.NEGATIVE_INFINITY;
  let maxValue = Number.NEGATIVE_INFINITY;
  let difference;

  let minHeap = new MinHeap();
  // add first element of first k list into min hep
  for (let i = 0; i < nums.length; i++) {
    minRange = Math.min(minRange, nums[i][0]);
    maxRange = Math.max(maxRange, nums[i][0]);
    maxValue = Math.max(maxValue, nums[i][0]);
    minHeap.insert([nums[i][0], i, 0]);
  }

  difference = maxRange - minRange;

  while (minHeap.size() >= nums.length) {
    let [element, listIndex, index] = minHeap.extractMin();

    if (
      difference > maxValue - element ||
      (difference == maxValue - element && element < minRange)
    ) {
      minRange = element;
      maxRange = maxValue;
      difference = maxValue - element;
    }

    if (index + 1 < nums[listIndex].length) {
      minHeap.insert([nums[listIndex][index + 1], listIndex, index + 1]);
      maxValue = Math.max(maxValue, nums[listIndex][index + 1]);
    }
  }

  return [minRange, maxRange];
};

// MinHeap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  getMinEle() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index][0] < this.heap[parentIndex][0]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    let smallestIndex = index;
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.heapifyDown(smallestIndex);
    }
  }
}
