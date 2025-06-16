let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countNotesForChange = (amount) => {
    let notes = 0;
        
    if(amount >= 100){
        notes += parseInt(amount / 100);
        amount %= 100;
    }
    if(amount >= 50) {
        notes += parseInt(amount / 50);
        amount %= 50;
    }if(amount >= 10) {
        notes += parseInt(amount / 10);
        amount %= 10;
    }
    if(amount >= 5) {
        notes += parseInt(amount / 5); 
        amount %= 5;
    }
    if(amount >= 2) {
        notes += parseInt(amount / 2);
        amount %= 2;
    } 
    if(amount === 1){
        notes += amount;
    }
    
    console.log(notes);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((amount) => countNotesForChange(amount));
});
