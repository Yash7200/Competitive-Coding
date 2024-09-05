let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countPizzasToOrder = (totalFriends, slicePerFriend) => {
    const totalSlices = totalFriends * slicePerFriend;
    
    const pizzasToOrder = ((totalSlices % 4) === 0)
        ? (totalSlices / 4)
        : parseInt(totalSlices / 4) + 1;
    console.log(pizzasToOrder);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [totalFriends, slicePerFriend] = testcase;
        countPizzasToOrder(totalFriends, slicePerFriend);
    });
});