let input = '';
process.stdin.on('data', (data) => input += data);

const filterInput = (strArray) => {
    strArray.shift();
    const filteredInput = strArray.reduce((acc, item, index) => {
        if((index % 2) !== 0){
            acc.push(item.trim());
        }
        
        return acc;
    }, []);

    return filteredInput;
};

const splitDNAstr = (dnaStr) => {
    const regex = new RegExp('.{1,2}','g');
    return dnaStr.match(regex);
};

const getDNAencoding = (binaryStr) => {
    switch (binaryStr){
        case '00': return 'A';
        case '01': return 'T';
        case '10': return 'C';
        case '11': return 'G';
    }
};

const checkDNA = (dnaStrArray) => {
    const dna = dnaStrArray.reduce((acc, item) => acc.concat(getDNAencoding(item)), '');
    console.log(dna);
};

process.stdin.on('end', () => {
    const testcases = filterInput(input.trim().split('\n'));
    
    testcases.forEach((dnaStr) => {
        const dnaStrArray = splitDNAstr(dnaStr);
        // console.log(dnaStrArray);
        checkDNA(dnaStrArray);
    });
});
