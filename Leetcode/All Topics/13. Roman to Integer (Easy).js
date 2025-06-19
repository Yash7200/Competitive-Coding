const romanStrToNum = (romanStrArray) => {
    const romanInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const numArray = romanStrArray.map((romanChar) => romanInt[romanChar])

    return numArray;
};

const getNum = (numArray) => {
    const arrayLength = numArray.length;
    let finalNum = 0;

    numArray.forEach((num, index) => {
        const isNotLastItem = index < arrayLength;
        const nextNum = numArray[index + 1];
        const isSmallThanNextNum = num < nextNum;
        
        if(isNotLastItem && isSmallThanNextNum) {
            finalNum -= num
            return;
        }
        finalNum += num;
    });

    return finalNum;
};

const romanToInt = (str) => {
    const romanStrArray = str.trim().split('')
    const numArray = romanStrToNum(romanStrArray);
    const num = getNum(numArray);

    return num;
};
