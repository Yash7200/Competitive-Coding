const updateArrayItems = (array) => {
    const arrayLength = array.length;
    array = array.map((item, index) => {
        const tenPow = arrayLength - (index + 1);
        const num = item * Math.pow(10, tenPow);
        
        return num;
    });
    
    return array
}

const convertToRomanStr = (numArray) => {
    const romanInt = [
        {val: 1000, symbol: 'M'},
        {val: 900, symbol: 'CM'},
        {val: 500, symbol: 'D'},
        {val: 400, symbol: 'CD'},
        {val: 100, symbol: 'C'},
        {val: 90, symbol: 'XC'},
        {val: 50, symbol: 'L'},
        {val: 40, symbol: 'XL'},
        {val: 10, symbol: 'X'},
        {val: 9, symbol: 'IX'},
        {val: 5, symbol: 'V'},
        {val: 4, symbol: 'IV'},
        {val: 1, symbol: 'I'},
    ]
    
    const romanStr = numArray.reduce((acc, num) => {
        let index = 0;
        
        romanInt.some((item) => {
            while(num >= item.val){
                acc.push(item.symbol)
                num -= item.val
            }

            if(item < num) return true;
        });
        
        return acc;
    }, []);
    
    return romanStr.join('');
};

const intToRoman = (num) => {
    let numArray = `${num}`.split('').map(Number);
    numArray = updateArrayItems(numArray);
    
    const romanStr = convertToRomanStr(numArray)
    return romanStr;
};