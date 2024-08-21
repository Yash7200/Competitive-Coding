process.stdin.setEncoding("utf-8");

const findAward = (finishingTime) => {
    (finishingTime < 3)
        ? console.log("GOLD")
        : ((finishingTime >= 3) && (finishingTime < 6))
            ? console.log("SILVER")
            : console.log("BRONZE");
};

process.stdin.on("data", (input) => {
    const finishingTime = Number(input.trim());
    
    findAward(finishingTime);
});