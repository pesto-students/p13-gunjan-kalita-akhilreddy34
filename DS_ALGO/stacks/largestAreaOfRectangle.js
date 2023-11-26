/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [];
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    let leftBaseForCurrentHeight = i;
    while (stack.length && stack[stack.length - 1].height > heights[i]) {
      let { index: poppedIndex, height: poppedHeight } = stack.pop();
      res = Math.max(res, (i - poppedIndex) * poppedHeight);
      leftBaseForCurrentHeight = poppedIndex;
    }
    stack.push({ index: leftBaseForCurrentHeight, height: heights[i] });
  }

  while (stack.length) {
    let { height: poppedHeight, index: poppedIndex } = stack.pop();
    res = Math.max(res, poppedHeight * (heights.length - poppedIndex));
  }

  return res;
};
