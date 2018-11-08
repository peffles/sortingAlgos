'use strict';

module.exports = function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  
  const mid = Math.floor(array.length / 2);
  const leftSide = array.slice(0, mid);
  const rightSide = array.slice(mid);

  return mergeArray( //eslint-disable-line
    mergeSort(leftSide),
    mergeSort(rightSide),
  );
};

module.exports = function mergeArray(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
