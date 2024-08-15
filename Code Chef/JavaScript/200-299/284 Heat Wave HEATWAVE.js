process.stdin.setEncoding("utf-8");

const isNewRecord = (tempOf1stDay, tempOf2ndDay) => {
    (tempOf2ndDay > tempOf1stDay)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const [tempOf1stDay, tempOf2ndDay] = input.trim().split(" ").map(Number);
    isNewRecord(tempOf1stDay, tempOf2ndDay);
});