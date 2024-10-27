let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const teamSizeArray = strArray.reduce((acc, item, index) => {
        ((index % 2) !== 0)
            ? acc.push(item)
            : {};
        
        return acc;
    }, []);

    const intArray = teamSizeArray.map((item) => {
       item = item.trim();
       
       if(item.includes(' ')){
           return item.split(' ').map(Number);
       }else{
           return [Number(item)];
       }
    });
    
    return intArray;
};

const countRoomsNeeded = (teams) => {
    let roomCount = 0;
    
    teams.forEach((peopleCount) => {
        ((peopleCount % 2) === 0)
            ? roomCount += (peopleCount / 2)
            : roomCount += (parseInt(peopleCount / 2) + 1);
    });
        
    console.log(roomCount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((teams) => {
        countRoomsNeeded(teams);
    });
});