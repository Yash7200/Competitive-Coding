process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const countSeatsToBeAdded = (availableSeats, interestedStudents) => {
    const seatsToBeAdded = (availableSeats >= interestedStudents)
        ? 0
        : interestedStudents - availableSeats;
    
    console.log(seatsToBeAdded);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [availableSeats, interestedStudents] = testcase;
        
        countSeatsToBeAdded(availableSeats, interestedStudents);
    });
});