process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countTotalFine = (fine, passengers, peopleWithTickets) => {
    const totalFine = (peopleWithTickets === passengers)
        ? 0
        : fine * (passengers - peopleWithTickets);
    
    console.log(totalFine);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [fine, passengers, peopleWithTickets] = testcase;
        
        countTotalFine(fine, passengers, peopleWithTickets);
    });
});