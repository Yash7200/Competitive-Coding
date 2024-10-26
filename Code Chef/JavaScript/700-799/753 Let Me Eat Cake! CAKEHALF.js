let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countSlicesEatByCharlie = (aliceCakeSlices, bobCakeSlices) => {
    let slicesEatByCharlie = 0;
    let piecesToEat;
    
    while(aliceCakeSlices !== bobCakeSlices){
        if(aliceCakeSlices > bobCakeSlices){
            piecesToEat = Math.ceil(aliceCakeSlices / 2)
            
            slicesEatByCharlie += piecesToEat;
            aliceCakeSlices -= piecesToEat;
        }
    
        if(bobCakeSlices > aliceCakeSlices){
            piecesToEat = Math.ceil(bobCakeSlices / 2)
            
            slicesEatByCharlie += piecesToEat;
            bobCakeSlices -= piecesToEat;
        }
    }
    
    console.log(slicesEatByCharlie);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [aliceCakeSlices, bobCakeSlices] = testcase;
        countSlicesEatByCharlie(aliceCakeSlices, bobCakeSlices);
    });
});