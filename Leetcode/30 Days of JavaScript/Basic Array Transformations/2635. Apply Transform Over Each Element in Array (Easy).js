/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/

const map = (arr, fn) => {
    const transformedArr = [];
    arr.forEach((element, index)=>{
        transformedArr.push(fn(element, index));
    });
    return transformedArr;
};
