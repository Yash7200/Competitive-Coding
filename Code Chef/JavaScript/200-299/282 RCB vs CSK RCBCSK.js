process.stdin.setEncoding("utf-8");

const whoQualified = (rcbRuns, cskRuns) => {
    const scoreDiff = rcbRuns - cskRuns;
    (scoreDiff >= 18)
        ? console.log("RCB")
        : console.log("CSK");
};

process.stdin.on("data", (input) => {
    const [rcbRuns, cskRuns] = input.trim().split(" ").map(Number);
    whoQualified(rcbRuns, cskRuns);
});