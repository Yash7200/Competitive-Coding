process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
}

const neededDonations = (target, receivedDonation) => {
    const pendingDonations = target - receivedDonation;
    console.log(pendingDonations);
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase)=>{
        const [target, receivedDonation] = testcase;
        
        neededDonations(target, receivedDonation);
    });
});