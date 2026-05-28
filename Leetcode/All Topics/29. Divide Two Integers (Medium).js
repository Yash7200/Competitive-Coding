/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
*/
const divide = (dividend, divisor) => {
    const result = dividend / divisor;

    const MAX = (2 ** 31) - 1;
    const MIN = (-2) ** 31;

    if(result > MAX) return MAX;
    if(result < MIN) return MIN;

    return parseInt(result);
}