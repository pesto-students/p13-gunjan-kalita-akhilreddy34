class Solution {
  isMaxHeap(n, arr) {
    let leftChildVal = 0;
    let rightChildVal = 0;
    let currentIndexVal;
    for (let i = 0; i < n; i++) {
      leftChildVal = arr[2 * i + 1] ? arr[2 * i + 1] : 0;
      rightChildVal = arr[2 * i + 2] ? arr[2 * i + 2] : 0;
      currentIndexVal = arr[i];
      if (arr[i] >= leftChildVal && arr[i] >= rightChildVal) continue;
      else return false;
    }
    return true;
  }
}
