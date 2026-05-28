/**
 * @param {string} s
 * @return {number}
*/

const lengthOfLastWord = (s) => {
    const lastWordSize = s.trim().split(' ').at(-1).length;
    return lastWordSize;
};