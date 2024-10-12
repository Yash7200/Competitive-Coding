let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const sortArray = (arrayInput) => {
    const reverseSortedArray = arrayInput.sort((a,b) => a-b);
    
    reverseSortedArray.forEach((item) => console.log(item));
};

process.stdin.on('end', () => {
    const arrayInput = strToInt(input.trim().split('\n'));
    sortArray(arrayInput);
});
