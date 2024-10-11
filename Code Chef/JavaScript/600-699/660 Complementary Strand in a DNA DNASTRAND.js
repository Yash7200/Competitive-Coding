let input = '';
process.stdin.on('data', (data) => input += data);

const filterInput = (strArray) => {
    strArray.shift();
    const filteredInput = strArray.reduce((acculmulator, _, index, array) => {
        ((index % 2) !== 0)
            ? acculmulator.push(array[index].trim())
            : {};
        return acculmulator;
    }, []);
    return filteredInput;
};

const replaceItem = (match) => {
    switch (match) {
        case 'A':
            return 'T';
        case 'T':
            return 'A';
        case 'C':
            return 'G';
        case 'G':
            return 'C';
    }
};

const determineSequence = (DNA) => {
    let result = DNA.split('').map((character) => replaceItem(character)).join('');
    
    console.log(result);
};

process.stdin.on('end', () => {
    const testcases = filterInput(input.trim().split('\n'));
    
    testcases.forEach((DNA) => {
        determineSequence(DNA);
    });
});