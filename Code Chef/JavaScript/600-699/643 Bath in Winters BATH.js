let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const maxPeopleCanBath = (geyserCapacity, bucketCapacity) => {
    const bucketsPerPerson = bucketCapacity * 2;
    
    const peopleCanBath = (geyserCapacity < bucketsPerPerson)
        ? 0
        : parseInt(geyserCapacity / bucketsPerPerson);
    console.log(peopleCanBath);
};

process.stdin.on('end', () => {
   const testcases =  strToInt(input.trim().split('\n'));
   
   testcases.forEach((testcase) => {
       const [geyserCapacity, bucketCapacity] = testcase;
       maxPeopleCanBath(geyserCapacity, bucketCapacity);
   });
});