process.stdin.setEncoding("utf-8");

const canAIanalyseCode = (charactersInCode) => {
    (charactersInCode <= 1000)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
   const charactersInCode = Number(input.trim());
   canAIanalyseCode(charactersInCode);
});