process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const isMonopolyInChefland = (company1profit, company2profit, company3profit) => {
    ( (company1profit > company2profit + company3profit) ||
      (company2profit > company1profit + company3profit) ||
      (company3profit > company1profit + company2profit) )
        
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [company1profit, company2profit, company3profit] = testcase;
        isMonopolyInChefland(company1profit, company2profit, company3profit);
    });
});