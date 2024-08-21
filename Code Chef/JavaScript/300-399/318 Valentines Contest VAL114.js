process.stdin.setEncoding("utf-8");

const willOrganized = (starters) => {
    (starters === 121)
        ? console.log("Likely")
        : console.log("Unlikely");
};

process.stdin.on("data", (input) => {
    const starters = Number(input.trim());
    
    willOrganized(starters);
});