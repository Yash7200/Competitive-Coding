let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const convertToInt = (input) => ((input.includes(' '))
        ? input.trim().split(' ').map(Number)
        : Number(input.trim())
    );
    
    const intArray = strArray.reduce((acc, item, index) => {
        if(index % 3 !== 0) return acc;
        
        const payload = [];
        payload.push(convertToInt(strArray[index + 1]));
        payload.push(convertToInt(strArray[index + 2]));
        
        acc.push(payload);
        return acc;
    }, []);

    return intArray;
};

const countSadCustomers = (donuts, orders) => {
    let sadCustomers = 0;
    
    orders.forEach((item) => {
        if(donuts[item - 1] > 0) {
            --donuts[item - 1];
        }else{
            ++sadCustomers;
        }
        
    });
    
    console.log(sadCustomers);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
       const [donuts, orders] = testcase;
       countSadCustomers(donuts, orders);
    });
});
