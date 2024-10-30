let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((acc, item, index) => {
        item = item.trim();
        
        if((index % 2) !== 0){
            (item.includes(' '))
                ? acc.push(item.split(' ').map(Number))
                : acc.push([Number(item)]);
        }
        return acc;
    }, []);

    return intArray;
};

const findDegree = (equation) => {
    let degree = 0;
    
    equation.forEach((term, index) => {
        (term !== 0) ? degree = index : {};
    });
    console.log(degree);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((equation) => {
        findDegree(equation);
    });
});
