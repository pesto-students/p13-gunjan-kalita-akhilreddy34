var transpose = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const res = Array.from({ length: columns }, () => []);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      res[j].push(matrix[i][j]);
    }
  }

  return res;
};
