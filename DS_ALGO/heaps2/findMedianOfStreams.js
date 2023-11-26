var MedianFinder = function () {
  this.maxHeap = new MaxPriorityQueue();
  this.minHeap = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.enqueue(num);

  // check if max ele in maxHeap is less than  the min ele in minHeap
  if (
    this.minHeap.front()
      ? this.maxHeap.front().element > this.minHeap.front().element
      : false
  ) {
    this.minHeap.enqueue(this.maxHeap.dequeue().element);
  }

  //check if lengths of two heaos are unequal
  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    this.minHeap.enqueue(this.maxHeap.dequeue().element);
  }
  if (this.minHeap.size() - this.maxHeap.size() > 1)
    this.maxHeap.enqueue(this.minHeap.dequeue().element);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() == this.minHeap.size())
    return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
  else
    return this.maxHeap.size() > this.minHeap.size()
      ? this.maxHeap.front().element
      : this.minHeap.front().element;
};
