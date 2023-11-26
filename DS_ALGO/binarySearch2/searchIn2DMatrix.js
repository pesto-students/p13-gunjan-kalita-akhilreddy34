var searchMatrix = function (matrix, target) {
  const targetRow = binarySearchOnRows(matrix, target);

  console.log("--target row", targetRow);

  if (targetRow != undefined)
    return binarySerachOnTargetRow(matrix, target, targetRow);
  else return false;
};

var binarySearchOnRows = function (matrix, target) {
  let low = 0;
  let high = matrix.length - 1;
  let numOfCols = matrix[0].length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (matrix[mid][0] <= target && matrix[mid][numOfCols] >= target) {
      return mid;
    } else if (matrix[mid][numOfCols] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};

var binarySerachOnTargetRow = function (matrix, target, targetRow) {
  let low = 0;
  let high = matrix[0].length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (matrix[targetRow][mid] == target) return true;
    else if (matrix[targetRow][mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};
