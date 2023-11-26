var longestConsecutive = function (nums) {
  const numsMap = {};
  let visitedSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    numsMap[nums[i]] = i;
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!visitedSet.has(i)) {
      let currentSequenceLength = 1;
      let currrentIndex = i;
      while (numsMap[nums[currrentIndex] - 1] != undefined) {
        visitedSet.add(currrentIndex);
        currentSequenceLength++;
        currrentIndex = numsMap[nums[currrentIndex] - 1];
      }

      result = Math.max(result, currentSequenceLength);
    }
  }

  return result;
};
