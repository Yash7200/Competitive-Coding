process.stdin.setEncoding("utf-8");

const canShreyanGo = (date) => {
    (date === 17)
        ? console.log("YAY")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const date = Number(input.trim());
    
    canShreyanGo(date);
});