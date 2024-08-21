process.stdin.setEncoding("utf-8");

const whichSession = (freeKick, penalty) => {
    (freeKick > penalty)
        ? console.log("FREEKICK")
        : console.log("PENALTY");
};

process.stdin.on("data", (input) => {
    const [freeKick, penalty] = input.trim().split(" ").map(Number);
    whichSession(freeKick, penalty);
});