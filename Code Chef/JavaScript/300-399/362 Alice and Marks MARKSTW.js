process.stdin.setEncoding("utf-8");

const isAliceHappy = (marksOfAlice, marksOfBob) => {
    (marksOfAlice >= (2 * marksOfBob))
        ? console.log("Yes")
        : console.log("No");
}

process.stdin.on("data", (input) => {
    const [marksOfAlice, marksOfBob] = input.trim().split(" ").map(Number);
    isAliceHappy(marksOfAlice, marksOfBob);
});