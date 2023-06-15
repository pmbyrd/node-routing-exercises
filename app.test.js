const { mean, mode, median } = require("./helpers");

describe("mean", function () {
  test("finds the mean of an array of numbers", function () {
    const nums = [1, 2, 3, 4, 5];
    expect(mean(nums)).toEqual(3);
    const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(mean(nums2)).toEqual(5);
  });
  test("finds the mean of an array with negative numbers", function () {
    const nums = [-1, 2, 3, 4, 5];
    expect(mean(nums)).toEqual(2.6);
  });
  test("finds the mean of an array with decimal numbers", function () {
    const nums = [1.5, 2.5, 3.5, 4.5, 5.5];
    expect(mean(nums)).toBeCloseTo(3.5);
  });
});

describe("median", function () {
  test("finds the median of an array of numbers", function () {
    const nums = [1, 2, 3, 4, 5];
    expect(median(nums)).toEqual(3);
    const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(median(nums2)).toEqual(5);
  });
  test("finds the median of an array with negative numbers", function () {
    const nums = [-1, 2, 3, 4, 5];
    expect(median(nums)).toEqual(3);
  });
  test("finds the median of an array with decimal numbers", function () {
    const nums = [1.5, 2.5, 3.5, 4.5, 5.5];
    expect(median(nums)).toBeCloseTo(3.5);
  });
});

describe("mode", function () {
  test("finds the mode of an array of numbers", function () {
    const nums = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];
    expect(mode(nums)).toEqual(5);
  });
  test("finds the mode of an array with negative numbers", function () {
    const nums = [-1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];
    expect(mode(nums)).toEqual(5);
  });
  test("finds the mode of an array with decimal numbers", function () {
    const nums = [1.5, 2.5, 3.5, 4.5, 5.5, 5.5, 5.5, 6.5, 7.5, 8.5, 9.5];
    expect(mode(nums)).toBeCloseTo(5.5);
  });
});
