let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((acc, _, index, array) => {
        if((index % 3) === 2){
            acc.push([
                Number(array[index - 2].trim().split(' ').slice(1)),
                array[index - 1].trim().split(' ').map(Number),
                array[index].trim().split(' ').map(Number)
            ]);
        }
        
        return acc;
    }, [  ]);

    return intArray;
};

const objectify = (freshnesses, prices) => {
    const data = [];
    
    freshnesses.forEach((freshness, index) => {
        data.push({
            freshness,
            price: prices[index]
        });
    });

    return data;
};

const getTotalOfFreshItems = (minFreshness, groceries) => {
    const freshItems = groceries.filter((item) => item.freshness >= minFreshness);
    
    const billAmount = freshItems.reduce((acc, item) => acc + item.price, 0);
    console.log(billAmount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [minFreshness, freshnesses, prices] = testcase;
        
        const groceries = objectify(freshnesses, prices);
        getTotalOfFreshItems(minFreshness, groceries);
    });
    
});
