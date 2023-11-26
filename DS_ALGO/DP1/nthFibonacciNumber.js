var fib = function (n) {
  let dp = [];
  return helperFunction(n, dp);
};

let helperFunction = function (n, dp) {
  if (n == 0 || n == 1) return n;

  if (dp[n] != undefined) return dp[n];

  dp[n] = helperFunction(n - 1, dp) + helperFunction(n - 2, dp);
  return dp[n];
};
