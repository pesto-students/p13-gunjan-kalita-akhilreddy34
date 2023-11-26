var mySqrt = function (x) {
  return binaryFunction(x);
};

var binaryFunction = function (target) {
  let low = 0;
  let high = target;
  let mid;
  let ans;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (mid * mid == target) {
      ans = mid;
      return ans;
    } else if (mid * mid < target) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};
