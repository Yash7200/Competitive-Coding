/**
 * @param {number} n
 * @param {number} k
 * @return {string}
*/

/* approach */
// ex. n = 5, k = 27
// allowed numbers = [1,2,3,4,5]

// get digits from left to right

/* step - 1 */
// decide how many combinations are possible after locking any digit at left most side
    // if we fix any no. on left most side then 24 combinations are possible due to (n - 1)!

/* step - 2 */
// divide k with possible combinations (k / combos), just for the first time use k - 1 after that update the k
    // in given example it'll be [k/combos], 26 / 24 = 1 so our 1st digit will be on index 1 that's how 2 will be our 1st digit

/* step - 3 */
// calculate new value of k by k = remainder using k % combos
    // in given example, it'll be 26 % 24 = 2

/* step - 4 */
// filter unused/pending numbers
    // in given example pending numbers are {1,3,4,5}

/* step - 5 */
// use updated k from step-3 & perform step - 1 to step - 4 again & again until all digits are used
    // for bit early exist, return last pending numbers manually when pending numbers are only 2

/* full example */
// n = 5, k = 27
// numbers = [1,2,3,4,5]

/* 1st digit */
// pendingNumbers = [1,2,3,4,5]
// combos = (n - 1)! = (5 - 1)! = 24, k = k - 1 = 26
// 1st digit index = parseInt(k / combos) = parseInt(26 / 24) = 1
// 1st digit = 2
// k = k % combos = 26 % 24 = 2

/* 2nd digit */
// pendingNumbers = [1,3,4,5]
// combos = (n - 1)! = (4 - 1)! = 6, k = 2
// 2nd digit index = parseInt(k / combos) = parseInt(2 / 6) = 0
// 2nd digit = 1
// k = k % combos = 2 % 6 = 2

/* 3rd digit */
// pendingNumbers = [3,4,5]
// combos = (n - 1)! = (3 - 1)! = 2, k = 2
// 3rd digit index = parseInt(k / combos) = parseInt(2/2) = 1
// 3rd digit = 4
// k = k % combos = 2 % 2 = 0

/* 4th digit */
// pendingNumber = [3,5]
// combos = (n - 1)! = (2 - 1)! = 1, k = 0
// 4th digit index = parseInt(k / combos) = (1 / 0) = 0
// 4th digit = 3
// k = k % combos = 0 % 1 = 0

// 5th digit
// pendingNumber = [5]

// join all digits
// 21435

// so "21435" is 27th number/combination/permutation

/* method - 1 */
const getFactorial = (num) => {
    let factorial = 1;
    for(let i = 2; i <= num; ++i) factorial *= i;
    
    return factorial;
}

const getCombinations = (pendingNums, k) => {
    const combos = getFactorial(pendingNums.length - 1);
    
    const digitIndex = parseInt(k / combos);
    const digit = pendingNums[digitIndex];

    k %= combos;
    pendingNums = pendingNums.filter((num) => num !== digit);

    if(pendingNums.length > 1) {
        return [digit, ...getCombinations(pendingNums, k)]
    }
    return [digit, pendingNums[0]];
};

const getPermutation = (n, k) => {
    const nums = Array.from({length: n}, (_,i) => ++i);
    
    const combination = getCombinations(nums, k-1).join('');
    return combination;
};
