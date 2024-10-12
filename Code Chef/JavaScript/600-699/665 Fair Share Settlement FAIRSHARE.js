let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(item => parseInt(item)));
    
    return intArray;
};

const divideBill = (bill, friends) => {
    ++friends;
    
    const billPerPerson = parseInt(bill / friends);
    --friends;
    
    const receivedBill = billPerPerson * friends;
    const billToPay = bill - receivedBill;
    
    console.log(billToPay);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bill, friends] = testcase;
        divideBill(bill, friends);
    });
});