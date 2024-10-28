let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countNeededBoxes = (bookShelvesCount, booksPlacedPerShelve, booksPerBox) => {
    const minBoxesPerShelve = parseInt(booksPlacedPerShelve / booksPerBox);
    
    const boxesNeeded = ((booksPlacedPerShelve % booksPerBox) === 0)
        ? (minBoxesPerShelve * bookShelvesCount) 
        : ((minBoxesPerShelve + 1) * bookShelvesCount);
    console.log(boxesNeeded);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bookShelvesCount, booksPlacedPerShelve, booksPerBox] = testcase;
        countNeededBoxes(bookShelvesCount, booksPlacedPerShelve, booksPerBox);
    });
});