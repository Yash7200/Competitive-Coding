/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

// solution - 1
const twoSum = (nums, target) => {
  const arrayLength = nums.length;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// solution - 2
const twoSum = (nums, target) => {
  let isValidTargetSum = false;
  const validIndexes = [];

  nums.some((currentNum, currentIndex) => {
    if (currentIndex === nums.length - 1) return true;

    const restOfArray = nums.slice(currentIndex + 1, nums.length);

    restOfArray.some((otherNum, otherIndex) => {
      isValidTargetSum = currentNum + otherNum === target;
      isValidTargetSum
        ? validIndexes.push(currentIndex, currentIndex + otherIndex + 1)
        : {};

      return isValidTargetSum;
    });

    return isValidTargetSum;
  });

  return validIndexes;
};

// solution - 3
const twoSum = (nums, target) => {
  const arrLength = nums.length;

  const numObj = {};
  for(let i = 0; i < arrLength; ++i){
    const component = target - nums[i];
    
    if(numObj[component] !== undefined){
        return [numObj[component], i];
    }
    numObj[nums[i]] = i;
  }
};
