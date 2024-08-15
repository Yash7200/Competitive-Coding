process.stdin.setEncoding("utf-8");

const canParticipate = (teamSize) => {
    ((teamSize >= 6) && (teamSize <= 8))
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const teamSize = Number(input.trim());
    
    canParticipate(teamSize);
});