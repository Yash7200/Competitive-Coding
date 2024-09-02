process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const checkBucketStatus = (waterInBucket, bucketCapacity, waterRate, timeInHrs) => {
    while(timeInHrs > 0){
        waterInBucket += waterRate;
        --timeInHrs;
    }
    
    (waterInBucket === bucketCapacity)
        ? console.log("filled")
        : (waterInBucket >= bucketCapacity)
            ? console.log("overflow")
            : console.log("Unfilled");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [waterInBucket, bucketCapacity, waterRate, timeInHrs] = testcase;
        checkBucketStatus(waterInBucket, bucketCapacity, waterRate, timeInHrs);
    });
});