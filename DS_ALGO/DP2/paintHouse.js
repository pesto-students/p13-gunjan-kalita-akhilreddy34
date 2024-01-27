function paintHouse(A) {
  let dp = Array.from({ length: A.length }, () => []);
  return helperFunction(A, 0, -1, dp);
}

let helperFunction = (array, row, neglectIndex, dp) => {
  if (row >= array.length) return 0;

  let minCost = Number.POSITIVE_INFINITY;

  for (let i = 0; i < 3; i++) {
    if (i != neglectIndex) {
      if (dp[row][i] == undefined) {
        dp[row][i] = array[row][i] + helperFunction(array, row + 1, i, dp);
      }

      minCost = Math.min(minCost, dp[row][i]);
    }
  }

  return minCost;
};
