const twoSum = (nums, target) => {
    const arrayLength = nums.length;

    for(let i = 0; i < arrayLength; i++){
        for(let j = i+1; j< arrayLength; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};