let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getFloorNo = (roomNo) => {
    const floor = Math.ceil(roomNo / 10);
    return floor;
};

const countFloorsToReach = (roomNoOfChef, roomNoOfChefina) => {
    const floorOfChef = getFloorNo(roomNoOfChef);
    const floorOfChefina = getFloorNo(roomNoOfChefina);
    
    const floorsToReach = Math.abs(floorOfChefina - floorOfChef);
    console.log(floorsToReach);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [roomNoOfChef, roomNoOfChefina] = testcase;
        countFloorsToReach(roomNoOfChef, roomNoOfChefina);
    });
});