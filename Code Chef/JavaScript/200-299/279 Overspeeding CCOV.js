process.stdin.setEncoding("utf-8");

const isFined = (speed) => {
    (speed > 40)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const speed = Number(input.trim());
    
    isFined(speed);
});