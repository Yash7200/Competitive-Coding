process.stdin.setEncoding("utf-8");

const canCompleteGoal = (length, width) => {
    const totalDistance = 2 * (length + width);
    (totalDistance >= 1000)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const [length, width] = input.trim().split(" ").map(Number);
    
    canCompleteGoal(length, width);
});