var canPartition = function (nums) {
  let totalSum = nums.reduce((total, num) => {
    return total + num;
  }, 0);

  if (totalSum % 2 == 0) {
    let dp = Array.from({ length: nums.length }, () => []);
    return helperFunction(0, nums, totalSum / 2, dp);
  } else return false;
};

var helperFunction = function (index, nums, target, dp) {
  if (index >= nums.length || target < 0) return false;
  if (target == 0) return true;

  if (dp[index][target] != undefined) {
    return dp[index][target];
  }

  dp[index][target] =
    helperFunction(index + 1, nums, target - nums[index], dp) ||
    helperFunction(index + 1, nums, target, dp);
  return dp[index][target];
};
