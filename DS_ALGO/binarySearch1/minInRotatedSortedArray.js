var findMin = function (nums) {
  return binaryFunction(nums);
};

var binaryFunction = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums[0];
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (mid > 0 && nums[mid] < nums[mid - 1]) {
      ans = nums[mid];
      return ans;
    } else if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};
