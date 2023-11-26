var wordBreak = function (s, wordDict) {
  let dp = {};
  return helperFuction(s, wordDict, dp);
};

let helperFuction = function (word, wordDic, dp) {
  if (!word || word.length == 0) return true;
  if (dp[word] != undefined) return dp[word];

  for (let i = 0; i < word.length; i++) {
    let subString = word.substring(0, i + 1);
    if (wordDic.includes(subString)) {
      if (helperFuction(word.substring(i + 1), wordDic, dp)) {
        dp[word] = true;
        return true;
      }
    }
  }
  dp[word] = false;
  return dp[word];
};
