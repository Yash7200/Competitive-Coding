/**
 * @param {number[]} digits
 * @return {number[]}
*/
const plusOne = (digits) => {
    return `${BigInt(digits.join('')) + BigInt(1)}`.split('').map(Number)
};