/**
 * @param {number} x
 * @return {number}
*/

// without loop
const reverse = (n) => {
    let num = Math.abs(n);
    // const strNum = num.toString().split('').reverse();
    let reversedNum = 0;

    while(num !== 0){
        reversedNum = (reversedNum * 10) + (num % 10);
        num = parseInt(num / 10);
    }

    const isNegative = n < 0;
    reversedNum = (isNegative) ? '-'.concat(reversedNum) : reversedNum;
    
    const newNum = parseInt(reversedNum);

    const minRange = Math.pow(-2, 31);
    const maxRange = Math.pow(2, 31) - 1;
    const isSafeInteger = (newNum >= minRange) && (newNum <= maxRange);
    
    if(isSafeInteger) return newNum;

    return 0;
};

// with loop
const reverse = (n) => {
    const num = n;
    const isNegative = num < 0;
    const strNum = num.toString().split('').reverse();
    
    (isNegative) ? strNum.unshift('-') : {};
    const newNum = parseInt(strNum.join(''));
    
    const minRange = Math.pow(-2, 31);
    const maxRange = Math.pow(2, 31) - 1;
    const isSafeInteger = (newNum >= minRange) && (newNum <= maxRange);
    
    if(isSafeInteger) return newNum;

    return 0;
};