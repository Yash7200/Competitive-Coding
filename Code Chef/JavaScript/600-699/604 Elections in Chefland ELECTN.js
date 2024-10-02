let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    
    const intArray = strArray.reduce((acc, _, index, array) => {
        if((index % 2) !== 0){
            acc.push([
                array[index - 1].trim().split(' ').map(Number),
                array[index].trim().split(' ').map(Number)
            ]);
        }
        return acc;
    }, []);
    
    return intArray;
};

const countEligibleVoters = (peopleNminAge, votersAgeData) => {
    const [_, minAge] = peopleNminAge;
    let eligibleVoters = 0;
    
    votersAgeData.forEach((age) => {
        (age >= minAge)
            ? ++eligibleVoters
            : {};
    });
    
    console.log(eligibleVoters);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [peopleNminAge, votersAgeData] = testcase;
        countEligibleVoters(peopleNminAge, votersAgeData);
    });
});