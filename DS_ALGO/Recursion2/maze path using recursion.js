var uniquePaths = function (m, n) {
  let dp = Array.from({ length: m }, () => []);
  return helperFunction(0, 0, m, n, dp);
};

let helperFunction = function (row, col, m, n, dp) {
  if (row == m - 1 && col == n - 1) return 1;
  if (row >= m || col >= n) return 0;

  if (dp[row][col] != undefined) return dp[row][col];
  dp[row][col] =
    helperFunction(row, col + 1, m, n, dp) +
    helperFunction(row + 1, col, m, n, dp);

  return dp[row][col];
};
