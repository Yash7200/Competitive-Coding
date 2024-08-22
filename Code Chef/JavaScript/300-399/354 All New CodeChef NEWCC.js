process.stdin.setEncoding("utf-8");

const whichIsFaster = (oldServerDuration, newServerDuration) => {
    (oldServerDuration === newServerDuration)
        ? console.log("Same")
        : (oldServerDuration < newServerDuration)
            ? console.log("Old")
            : console.log("New");
};

process.stdin.on("data", (input) => {
    const [oldServerDuration, newServerDuration] = input.trim().split(" ").map(Number);
    
    whichIsFaster(oldServerDuration, newServerDuration);
});