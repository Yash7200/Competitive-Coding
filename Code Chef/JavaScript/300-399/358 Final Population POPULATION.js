process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const countFinalPopulation = (initialPeople, peopleLeft, immigratedPeople) => {
    const finalPopulation = initialPeople - peopleLeft + immigratedPeople;
    console.log(finalPopulation);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [initialPeople, peopleLeft, immigratedPeople] = testcase;
        
        countFinalPopulation(initialPeople, peopleLeft, immigratedPeople);
    });
});