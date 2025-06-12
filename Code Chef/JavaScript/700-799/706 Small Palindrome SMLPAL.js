let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((item) => item.trim().split(' ').map(Number));
    
    return intArray;
}

const getPalindromeNum = (countOf1s, countOf2s) => {
    let str = '';
    
    for(let i = 0; i < (countOf1s / 2); i++) str += '1'
    for(let i = 0; i < (countOf2s / 2); i++) str += '2'
    
    str += str.split('').reverse().join('')
    
    console.log(str);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [countOf1s, countOf2s] = testcase;
        getPalindromeNum(countOf1s, countOf2s);
    })
});
