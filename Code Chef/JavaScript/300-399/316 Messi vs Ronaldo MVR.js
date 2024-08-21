process.stdin.setEncoding("utf-8");

const whoGotMorePoints = (goalsOfMessi, assistsOfMessi, goalsOfRonaldo, assistsOfRonaldo) => 
{
    const pointsOfMessi = (goalsOfMessi * 2) + assistsOfMessi;
    const pointsOfRonaldo = (goalsOfRonaldo * 2) + assistsOfRonaldo;
    
    (pointsOfMessi === pointsOfRonaldo)
        ? console.log("Equal")
        : (pointsOfMessi > pointsOfRonaldo)
            ? console.log("Messi")
            : console.log("Ronaldo");
};

process.stdin.on("data", (input) => {
    const [goalsOfMessi, assistsOfMessi, goalsOfRonaldo, assistsOfRonaldo] = input.trim().split(" ").map(Number);
    
    whoGotMorePoints(goalsOfMessi, assistsOfMessi, goalsOfRonaldo, assistsOfRonaldo);
});