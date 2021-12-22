exports.rotateSquare = matrix => {
    return matrix.map((row, i) =>
      row.map((val, j) => matrix[matrix.length - 1 - j][i])
    );
  };