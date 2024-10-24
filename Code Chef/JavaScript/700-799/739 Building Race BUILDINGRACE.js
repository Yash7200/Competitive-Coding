let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const whoWillWin = (floorOfChef, floorOfChefina, speedOfChef, speedOfChefina) => {
    
    const timeOfChef = floorOfChef / speedOfChef;
    const timeOfChefina = floorOfChefina / speedOfChefina;
    
    const winner = (timeOfChef === timeOfChefina)
        ? 'Both'
        : (timeOfChef < timeOfChefina)
            ? 'Chef' : 'Chefina';
    
    console.log(winner);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [floorOfChef, floorOfChefina, speedOfChef, speedOfChefina] = testcase;
        whoWillWin(floorOfChef, floorOfChefina, speedOfChef, speedOfChefina);
    });
});