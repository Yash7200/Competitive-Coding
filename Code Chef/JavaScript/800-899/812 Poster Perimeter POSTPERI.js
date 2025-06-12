let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((item) => item.trim().split(' ').map(Number));
    
    return intArray;
};

const getMinDifference = (maxLength, maxWidth, targetPerimeter) => {
    const getPerimeter = (length, width) => 2 * (length + width);
    
    const isAboveLimit = (perimeter) => perimeter > targetPerimeter;
    const getPerimeterDiff = (perimeter) => Math.abs(targetPerimeter - perimeter);
    
    const maxPerimeter = getPerimeter(maxLength, maxWidth);
    const minPerimeter = 4;
    
    let diff;
    
    if(isAboveLimit(minPerimeter)){
        diff = getPerimeterDiff(minPerimeter);
    }else if(!isAboveLimit(maxPerimeter)){
        diff = getPerimeterDiff(maxPerimeter);
    }else{
        diffList = [];
        for(let length = 1; length <= maxLength; ++length){
            for(let width = 1; width <= maxWidth; ++width){
                const perimeter = getPerimeter(length, width);
                diffList.push(getPerimeterDiff(perimeter));
            }
        }
        
        diff = Math.min(...diffList);
    }
    
    console.log(diff);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [maxLength, maxWidth, targetPerimeter] = testcase;
        getMinDifference(maxLength, maxWidth, targetPerimeter);
    });
});
