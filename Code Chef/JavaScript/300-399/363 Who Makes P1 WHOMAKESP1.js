process.stdin.setEncoding("utf-8");

const whoWillSolve = (patienceOfTyro, patienceOfDom) => {
    ((patienceOfTyro === patienceOfDom) || (patienceOfTyro < patienceOfDom))
        ? console.log("Tyro")
        : console.log("Dom");
};

process.stdin.on("data", (input) => {
    const [patienceOfTyro, patienceOfDom] = input.trim().split(" ").map(Number);
    whoWillSolve(patienceOfTyro, patienceOfDom);
});