'use strict';

module.exports = {
  matrix: (row, col, ...content) => {
    if (row * col < content.length) return null;
    const matrix = [...Array(row).keys()]
      .map((_, rowIndex) => [...Array(col)] // making rows of the matrix
        .map((__, colIndex) => { // for each row
          const contentIndex = rowIndex * col + colIndex;
          return contentIndex < content.length ? content[contentIndex] : undefined;
          // map the content into columns, leave empty cells with undefined
        }));
    return matrix;
  },
};
