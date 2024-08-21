process.stdin.setEncoding("utf-8");

const findRemainingPlaces = (visitedPlaces) => {
    const remainingPlaces = 100 - visitedPlaces;
    console.log(remainingPlaces);
};

process.stdin.on("data", (input) => {
    const visitedPlaces = Number(input.trim());
    
    findRemainingPlaces(visitedPlaces);
});