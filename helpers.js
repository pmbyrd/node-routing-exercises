// This file contains the statistical functions that will be used in the routes.
const mean = (numsArr) => {
    const sum = numsArr.reduce((acc, curr) => acc + curr);
    const mean = sum / numsArr.length;
    return mean;
};

const median = (numsArr) => {
    const sortedArr = numsArr.sort((a, b) => a - b);
    const midIndex = Math.floor(sortedArr.length / 2);
    const median = sortedArr[midIndex];
    return median;
}

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
}

const getQueryNums = (...nums) => {
    numsArr = [...nums];
    console.log(...nums)
    console.log(typeof nums)
    console.log(numsArr);
    return numsArr;
}

getQueryNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

module.exports = {mean, median, mode, getQueryNums};