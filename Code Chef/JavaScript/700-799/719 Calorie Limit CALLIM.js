let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const mergedInput = strArray.reduce((acc, _, index, array) => {
        ((index % 2) !== 0)
            ? acc.push(
                array[index - 1] + ' ' + array[index]
            )
            : {};
        
        return acc;
    }, []);
    
    const intArray = mergedInput.map((strItem) => strItem.trim().split(' ').map(Number).slice(1));
    
    return intArray;
};

const maxSweetToEat = (maxCalorieLimit, sweetsWithCalories) => {
    let sweetCount = 0;
    let caloriesCount = 0;
    
    sweetsWithCalories.some((sweetCalorie) => {
        caloriesCount += sweetCalorie
        
        if(caloriesCount <= maxCalorieLimit){
            ++sweetCount;
            return false;
        }else{
            return true;
        }
    });
    
    console.log(sweetCount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [maxCalorieLimit, ...sweetsWithCalories] = testcase;
        maxSweetToEat(maxCalorieLimit, sweetsWithCalories);
    });
});