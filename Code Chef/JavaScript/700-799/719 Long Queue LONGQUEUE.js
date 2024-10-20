let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((accumulator, _, index, array) => {
        if((index % 2) !== 0){
            accumulator.push(
                array[index].trim().split(' ').map(Number)
            );
        }
        return accumulator;
    }, []);
    
    return intArray;
};

const getFinalPosition = (queue, halfWealthOfSushil, positionOfSushil) => {
    const canStopBulling = (wealth) => wealth > halfWealthOfSushil; 
    
    let newPosition = positionOfSushil;
    let lastBulliedPersonPlace;
    
    const isBullingStopped = queue.some((wealth, index) => {
        if(canStopBulling(wealth)){
            lastBulliedPersonPlace = parseInt((index === 0)
                ? '0' : String(index));
            return true;
        }
        return false;
    });
    
    
    const lastBulliedPerson = (isBullingStopped)
        ? queue[lastBulliedPersonPlace] : queue[queue.length - 1];
    
    queue.reverse();
    
    newPosition = (isBullingStopped)
        ? ( (queue.lastIndexOf(lastBulliedPerson)) + 2 ) : 1;
        
    return newPosition;
};

const findFinalPosition = (queue) => {
    const positionOfSushil = queue.length - 1;
    const halfWealthOfSushil = queue[positionOfSushil] / 2;
    
    queue.pop();
    queue.reverse();
    
    const finalPosition = getFinalPosition(queue, halfWealthOfSushil, positionOfSushil);
    console.log(finalPosition);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((queue) => {
        findFinalPosition(queue);
    });
});