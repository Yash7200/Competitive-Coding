process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const badgeByDonation = (bloodDonations) => {
    (bloodDonations <= 3)
        ? console.log("BRONZE")
        : ((bloodDonations > 3) && (bloodDonations <= 6))
            ? console.log("SILVER")
            : console.log("GOLD");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((bloodDonations) => {
        badgeByDonation(bloodDonations);
    });
});