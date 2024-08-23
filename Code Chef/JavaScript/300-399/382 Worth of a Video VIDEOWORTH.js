process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const countWorthOfVideo = (seconds) => {
    const worthOf1Frame = 1000;
    const totalFrames = seconds * 24;
    const worthOfVideo = totalFrames * worthOf1Frame;
    
    console.log(worthOfVideo);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((seconds) => {
        countWorthOfVideo(seconds);
    });
});