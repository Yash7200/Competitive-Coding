let input = '';
process.stdin.on('data', (data) => input += data);

const isMultipleOf3 = (number) => (number % 3) === 0;

const getMultipleOf3 = (number, change) => {
    const sum = number + change;
    
    if(isMultipleOf3(sum)){
        return sum;
    }else{
        return getMultipleOf3(sum, change);
    }
}

process.stdin.on('end', () => {
    const number = Number(input.trim());
    
    if(isMultipleOf3(number)){
        console.log(number);
    }else{
        const upperMultipleOf3 = getMultipleOf3(number, 1);
        const lowerMultipleOf3 = getMultipleOf3(number, -1);
        
        const higherMultipleDiff = Math.abs(number - upperMultipleOf3);
        const lowerMultipleDiff = Math.abs(number - lowerMultipleOf3);
        
        const nearestMultiple = (higherMultipleDiff < lowerMultipleDiff) ? upperMultipleOf3 : lowerMultipleOf3; 
        console.log(nearestMultiple);
    }
});
