var coinChange = function (coins, amount) {
  if (amount == 0) return 0;

  let coinsDP = [];
  return helperFunction(amount, coins, coinsDP);
};

let helperFunction = function (amount, coins, coinsdDP) {
  if (amount == 0) return 0;
  if (amount < 0) return -1;

  let min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < coins.length; i++) {
    if (amount - coins[i] >= 0) {
      if (coinsdDP[amount - coins[i]])
        min =
          coinsdDP[amount - coins[i]] != -1
            ? Math.min(min, 1 + coinsdDP[amount - coins[i]])
            : min;
      else {
        let currentAmountMin = helperFunction(
          amount - coins[i],
          coins,
          coinsdDP
        );
        min =
          currentAmountMin != -1 ? Math.min(min, 1 + currentAmountMin) : min;
      }
    }
  }

  coinsdDP[amount] = min == Number.POSITIVE_INFINITY ? -1 : min;

  return coinsdDP[amount];
};
