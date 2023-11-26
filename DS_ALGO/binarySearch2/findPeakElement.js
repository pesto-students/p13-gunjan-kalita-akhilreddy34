var findPeakElement = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (
      (mid - 1 >= 0 ? nums[mid] > nums[mid - 1] : true) &&
      (mid + 1 < nums.length ? nums[mid] > nums[mid + 1] : true)
    )
      return mid;
    else if (nums[mid] < nums[mid + 1]) low = mid + 1;
    else high = mid - 1;
  }
};
