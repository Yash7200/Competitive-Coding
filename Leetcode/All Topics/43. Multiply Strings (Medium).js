/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
*/
const multiply = (num1, num2) => {
    num1 = BigInt(num1.trim());
    num2 = BigInt(num2.trim());

    return `${BigInt(num1 * num2)}`;
};