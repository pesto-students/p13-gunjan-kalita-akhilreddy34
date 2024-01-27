var maxProduct = function (nums) {
  let previousMaxproduct = nums[0];
  let previousMinProduct = nums[0];
  let currentMin;
  let currentMax;
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(
      nums[i],
      nums[i] * previousMaxproduct,
      nums[i] * previousMinProduct
    );
    currentMin = Math.min(
      nums[i],
      nums[i] * previousMaxproduct,
      nums[i] * previousMinProduct
    );

    previousMaxproduct = currentMax;
    previousMinProduct = currentMin;

    result = Math.max(result, currentMax);
  }

  return result;
};
