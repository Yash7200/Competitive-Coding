let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinAppsToDelete = (storageSize, app1Size, app2Size, app3Size) => {
    const availableSpace = storageSize - app1Size - app2Size;
    const minAppsToDelete = (availableSpace >= app3Size)
        ? 0
        : ((availableSpace + app1Size) >= app3Size ||
           (availableSpace + app2Size) >= app3Size)
            ? 1
            : 2;
            
    console.log(minAppsToDelete);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [storageSize, app1Size, app2Size, app3Size] = testcase;
        countMinAppsToDelete(storageSize, app1Size, app2Size, app3Size);
    });
});