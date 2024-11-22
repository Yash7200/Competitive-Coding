const romanCharToInt = (romanStrArr) => {
    const romanInts = {
       I: 1,
       V: 5,
       X: 10,
       L: 50,
       C: 100,
       D: 500,
       M: 1000,
    };
    const intArray = romanStrArr.reduce((acc, romanChar) => {
        acc.push(romanInts[romanChar]);
        return acc;
    }, []);
    
    return intArray;
};

const joinItems = (intArray) => {
    const jointArr = intArray.reduce((acc, value, index, arr) => {
        const isNullValue = (value) => value === null;
        const isValidCurrentValue = !isNullValue(value);
        const isValidNextValue = !isNullValue(arr[index + 1]);
        const isValidNext2ndValue = !isNullValue(arr[index + 2]);
        
        const is2TimeRepeated = (value === arr[index + 1]) && isValidCurrentValue && isValidNextValue;
        const is3TimeRepeated = is2TimeRepeated && (value === arr[index + 2]) && isValidNext2ndValue;
        
        if(is3TimeRepeated){
            acc.push(value + arr[index + 1] + arr[index + 2]);
            arr[index + 1] = null;
            arr[index + 2] = null;
        }else if(is2TimeRepeated){
            acc.push(value + arr[index + 1]);
            
            arr[index + 1] = null;
        }else if(value !== null){
            acc.push(value);
        }
        return acc;
    }, []);
    return jointArr;
};

const subtractSmallNums = (array) => {
    const arrayWithSubtraction = array.reduce((acc, value, index, arr) => {
        if(value < arr[index + 1]){
            acc.push(-1 * value);
        }else{
            acc.push(value);
        }
        return acc;
    }, []);
    return arrayWithSubtraction;
};

const romanToInt = (romanStr) => {
    romanStr = romanStr.trim();
    const intArray = romanCharToInt(romanStr.split(''));
    const jointIntArray = joinItems(intArray);
    const finalArray = subtractSmallNums(jointIntArray);
    const finalNum = finalArray.reduce((acc, value) => acc + value, 0);
    
    return finalNum;
};
