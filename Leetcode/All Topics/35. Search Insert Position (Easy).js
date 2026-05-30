/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
const searchInsert = (nums, target) => {
    let minNumIndex = Infinity;
    let maxNumIndex = Infinity;
    let numIndex = Infinity;
    
    nums.some((num, index) => {
        if(num === target){
            numIndex = index;
            return true;
        }
        if(num < target) minNumIndex = ++index;
        if(num > target) {
            maxNumIndex = index;
            return true
        }
    })

    const position = (numIndex !== Infinity) ? numIndex : Math.min(minNumIndex, maxNumIndex)
    return position;
};