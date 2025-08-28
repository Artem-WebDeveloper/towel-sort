module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  return matrix
    .map((array, i) =>
      i % 2 === 0 ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a)
    )
    .flat();
};
