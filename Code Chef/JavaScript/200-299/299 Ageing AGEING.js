process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const findAgeOfChefina = (ageOfChef) => {
    const ageOfChefina = (ageOfChef - 20) + 10;
    console.log(ageOfChefina);
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((ageOfChef) => {
        findAgeOfChefina(ageOfChef);
    });
});