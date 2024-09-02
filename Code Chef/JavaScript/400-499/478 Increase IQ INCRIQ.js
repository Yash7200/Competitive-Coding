process.stdin.setEncoding("utf-8");

const canBeatEinsteinByIQ = (chefIQ) => {
    chefIQ += 7;
    
    (chefIQ > 170)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const chefIQ = Number(input.trim());
    canBeatEinsteinByIQ(chefIQ);
});