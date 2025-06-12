let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    
    const convertToInt = (input) => (input.includes(' '))
        ? input.trim().split(' ').map(Number)
        : [Number(input.trim())]
    ;
    
    const intArray = strArray.reduce((acc, item, index) => {
        if(index % 2 !== 0) return acc;
        
        const payload = [];
        payload.push(convertToInt(item))
        payload.push(convertToInt(strArray[index + 1]));
        
        acc.push(payload);
        return acc;
    }, []);

    return intArray;
};

const whoHasBetterView = (vedHeight, varunHeight, chairs) => {
    const tallestChair = Math.max(...chairs);
    const otherChairs = chairs.filter((item) => item !== tallestChair);
    
    const tallestChairCount = chairs.filter((item) => item === tallestChair).length;
    
    const sumOfAllOtherChairs = otherChairs.reduce((acc, item) => acc + item, 0) + (( tallestChairCount - 1 ) * tallestChair)
    
    const varunHeightTotal = varunHeight + sumOfAllOtherChairs;
    const vedHeightTotal = vedHeight + tallestChair;
    
    const holdsBetterView = (varunHeightTotal === vedHeightTotal)
        ? 'Equal'
        : (varunHeightTotal > vedHeightTotal)
            ? 'Varun' : 'Ved'
    ;
    console.log(holdsBetterView);
};

process.stdin.on('end', () => {
   const testcases = strToInt(input.trim().split('\n'));
   
   testcases.forEach((testcase) => {
       const [_, vedHeight, varunHeight] = testcase[0];
       const chairs = testcase[1];
       
       whoHasBetterView(vedHeight, varunHeight, chairs);
   });
});
