process.stdin.setEncoding("utf-8");

const findLargeObj = (cuboidLength, cuboidHeight, cuboidWidth, cubeEdge) => {
    const cuboidVolume = cuboidLength * cuboidHeight * cuboidWidth;
    const cubeVolume = Math.pow(cubeEdge,3);
    
    (cuboidVolume === cubeVolume)
        ? console.log("Equal")
        : (cuboidVolume > cubeVolume)
            ? console.log("Cuboid")
            : console.log("Cube");
};

process.stdin.on("data", (input) => {
    const [cuboidLength, cuboidHeight, cuboidWidth, cubeEdge] = input.trim().split(" ").map(Number);
    
    findLargeObj(cuboidLength, cuboidHeight, cuboidWidth, cubeEdge);
});