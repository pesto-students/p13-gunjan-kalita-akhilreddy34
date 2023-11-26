var searchRange = function (nums, target) {
  return [firstOccurence(nums, target), lastOccurence(nums, target)];
};

var firstOccurence = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  let firstOccurence = -1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) firstOccurence = mid;

    if (nums[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return firstOccurence;
};

var lastOccurence = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  let lastOccurence = -1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) lastOccurence = mid;

    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return lastOccurence;
};
