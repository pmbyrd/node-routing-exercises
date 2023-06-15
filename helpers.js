// This file contains the statistical functions that will be used in the routes.
const mean = (numsArr) => {
  const sum = numsArr.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / numsArr.length;
  return mean;
};

const median = (numsArr) => {
  const sortedArr = numsArr.sort((a, b) => a - b);
  const midIndex = Math.floor(sortedArr.length / 2);
  const median = sortedArr[midIndex];
  return median;
};

const mode = (numsArr) => {
  const modeFreqCounter = {};
  let mode = 0;
  let modeCount = 0;
  for (let num of numsArr) {
    modeFreqCounter[num] = modeFreqCounter[num] + 1 || 1;
  }
  for (let num in modeFreqCounter) {
    if (modeFreqCounter[num] > modeCount) {
      modeCount = modeFreqCounter[num];
      mode = num;
    }
  }
  return mode;
};

const getQueryNums = (nums) => {
  const numsArr = nums.split(",").map((num) => parseInt(num.trim(), 10));
  return numsArr;
};

let nums2 = "1,3,5,7,9";
const result = getQueryNums(nums2);
console.log(result);  // Output: [1, 3, 5, 7, 9]
//
module.exports = { mean, median, mode, getQueryNums };
