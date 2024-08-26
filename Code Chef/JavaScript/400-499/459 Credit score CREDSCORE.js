process.stdin.setEncoding("utf-8");

const canAccessCREDprograms = (creditScore) => {
    (creditScore >= 750)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const creditScore = Number(input.trim());
    canAccessCREDprograms(creditScore);
});