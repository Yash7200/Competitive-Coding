let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const filteredArray = strArray.filter((strItem, index) => {
        if((index % 3) !== 0){
            return strItem;
        }
    });
    
    const combinedIntInput = filteredArray.reduce((acc, _, index, array) => {
        if((index % 2) !== 0){
            acc.push([
                array[index - 1].trim().split(' ').map(Number),
                array[index].trim().split(' ').map(Number)
            ]);
        }
        
        return acc;
    }, []);

    return combinedIntInput;
};

const countMarketEquilibrium = (supplies, demand) => {
    let equilibriumCount = 0;

    supplies.forEach((supply, index) => {
        (supply === demand[index])
            ? ++equilibriumCount
            : {};
    });
    console.log(equilibriumCount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [supply, demand] = testcase;
        countMarketEquilibrium(supply, demand);
    });
});