process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const maxProfitOn1stDay = (seatsPerPlane, peopleCount, pricePerSeat) => {
    const totalSeats = seatsPerPlane * 10;
    const bookedSeats = Math.min(totalSeats, peopleCount);
    
    const maxProfit = bookedSeats * pricePerSeat;
    console.log(maxProfit);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [seatsPerPlane, peopleCount, pricePerSeat] = testcase;
        maxProfitOn1stDay(seatsPerPlane, peopleCount, pricePerSeat);
    });
});