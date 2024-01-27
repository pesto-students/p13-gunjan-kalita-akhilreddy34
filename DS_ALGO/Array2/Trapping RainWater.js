var trap = function (height) {
  const prefixSum = new Array(height.length).fill(0);
  const suffixSum = new Array(height.length).fill(0);

  for (let i = 0; i < height.length; i++) {
    prefixSum[i] = i == 0 ? height[i] : Math.max(prefixSum[i - 1], height[i]);
  }

  for (let i = height.length - 1; i >= 0; i--) {
    suffixSum[i] =
      i == height.length - 1
        ? height[height.length - 1]
        : Math.max(suffixSum[i + 1], height[i]);
  }

  let trappedWater = 0;

  for (let i = 1; i < height.length - 1; i++) {
    trappedWater += Math.min(prefixSum[i], suffixSum[i]) - height[i];
  }

  return trappedWater;
};
