const myAtoi = (str) => {
    const strInput = str.trim().split('')
    let numStr = '';

    if(!strInput.length) return 0;

    const isNumChar = /[0-9]/;
    const isHyphenOrPlusChar = (char) => (char === '-' || char === '+');

    let isNumStarted = false;
    let sign = '';

    strInput.some((char) => {
        if(isNumChar.test(char)) {
            isNumStarted = true;
            numStr += char;

            return false;
        };

        if(!sign && !isNumStarted && isHyphenOrPlusChar(char)) {
            sign = char;
            return false;
        };

        return true;
    });

    sign = (sign === '') ? '+' : sign;
    const lowerLimit32BitInt = -2147483648;
    const upperLimit32BitInt = 2147483647;

    const convertedNum = (numStr === '') ? 0 : Number(`${sign}${numStr}`);
    const finalNum = (convertedNum < lowerLimit32BitInt) ? lowerLimit32BitInt
        : (convertedNum > upperLimit32BitInt) ? upperLimit32BitInt
        : convertedNum
    ;

    return finalNum;
};
