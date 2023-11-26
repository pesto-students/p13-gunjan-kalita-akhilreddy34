let helperFunction = function (s, start, end, dp) {
  if (start == end) return 1;
  if (start > end) return 0;

  if (dp[start][end] != undefined) return dp[start][end];

  if (s[start] == s[end])
    dp[start][end] = 2 + helperFunction(s, start + 1, end - 1, dp);
  else {
    let moveStartIndex = helperFunction(s, start + 1, end, dp);
    let moveEndIndex = helperFunction(s, start, end - 1, dp);

    dp[start][end] = Math.max(moveStartIndex, moveEndIndex);
  }

  return dp[start][end];
};
