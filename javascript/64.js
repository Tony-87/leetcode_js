/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length == 0 || grid[0].length == 0) {
    return 0;
  }
  var rows = grid.length;
  var columns = grid[0].length;

  var dp = [[grid[0][0]]];
  for (let i = 1; i < rows; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[rows - 1][columns - 1];
};

var minPathSum = minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
console.log(minPathSum);
//7
