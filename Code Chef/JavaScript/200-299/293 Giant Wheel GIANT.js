process.stdin.setEncoding("utf-8");

const canRide = (height) => {
    (height >= 60)
        ? console.log("Yes")
        : console.log("No");
}

process.stdin.on("data", (input) => {
    const height = Number(input.trim());
    canRide(height);
});