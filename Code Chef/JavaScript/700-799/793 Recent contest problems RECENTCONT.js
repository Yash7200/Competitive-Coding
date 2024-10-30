let input = '';

process.stdin.on('data', (data) => input += data);

const filterInput = (strArray) => {
    strArray.shift();
    const filteredArray = strArray.reduce((acc, item, index) => {
        if((index % 2) !== 0){
            acc.push( item.trim().split(' ') );
        }
        
        return acc;
    }, []);

    return filteredArray;
};

const countProblems = (problemList) => {
    let start38Count = 0;
    let ltime108Count = 0;
    
    problemList.forEach((problem) => {
        (problem === 'START38') ? ++start38Count : ++ltime108Count;
    });
    
    console.log(start38Count, ltime108Count);
};

process.stdin.on('end', () => {
    const testcases = filterInput(input.trim().split('\n'));
    
    testcases.forEach((problemList) => {
        countProblems(problemList);
    });
});
