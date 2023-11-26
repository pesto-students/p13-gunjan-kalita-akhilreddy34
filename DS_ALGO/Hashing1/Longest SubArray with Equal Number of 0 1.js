var findMaxLength = function (nums) {
  const map = {};
  let result = 0;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) currentSum = currentSum - 1;
    else currentSum = currentSum + 1;

    if (currentSum == 0) result = Math.max(result, i + 1);
    else if (map[currentSum] != null) {
      result = Math.max(result, i - map[currentSum]);
      // map[currentSum]= i;
    } else {
      map[currentSum] = i;
    }
  }

  return result;
};
