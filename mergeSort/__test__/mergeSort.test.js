'use strict';

const mergeSort = require('../mergeSort');
const mergeArray = require('../mergeSort'); // eslint-disable-line

const list1 = [8, 2, 6, 7, 4, 8, 9, 1, 0, 3];
const list2 = [1];


describe('testing mergeSort algorithm', () => {
  test('Should return sorted array', () => {
    expect(mergeSort(list1)).toEqual([0, 1, 2, 3, 4, 6, 7, 8, 9]);
  });
  test('Should return array if it only has ine index', () => {
    expect(mergeSort(list2)).toEqual([1]);
  });
});
