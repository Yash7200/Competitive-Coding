process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const findFineToPay = (speedOfCar) => {
    (speedOfCar <= 70)
        ? console.log(0)
        : ((speedOfCar > 70) && (speedOfCar <= 100))
            ? console.log(500)
            : console.log(2000);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((speedOfCar) => {
        findFineToPay(speedOfCar);
    });
});