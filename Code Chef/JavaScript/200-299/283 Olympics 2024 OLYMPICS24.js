process.stdin.setEncoding("utf-8");

const countRemainingMedals = (goldMedals, silverMedals, bronzeMedals) => {
    let remainingMedals = 0;
    (goldMedals < 5)
        ? remainingMedals = remainingMedals + (5 - goldMedals)
        : {};
    (silverMedals < 5)
        ? remainingMedals = remainingMedals + (5 - silverMedals)
        : {};
    (bronzeMedals < 5)
        ? remainingMedals = remainingMedals + (5 - bronzeMedals)
        : {};
    console.log(remainingMedals);
};

process.stdin.on("data", (input) => {
    const [goldMedals, silverMedals, bronzeMedals] = input.trim().split(" ").map(Number);
    
    countRemainingMedals(goldMedals, silverMedals, bronzeMedals);
});