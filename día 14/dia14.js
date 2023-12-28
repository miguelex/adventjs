function maxGifts(houses) {
  const n = houses.length;
  if (n === 0) {
    return 0;
  }

  const dp = new Array(n).fill(0);

  dp[0] = houses[0];
  dp[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + houses[i], dp[i - 1]);
  }

  return dp[n - 1];
}
