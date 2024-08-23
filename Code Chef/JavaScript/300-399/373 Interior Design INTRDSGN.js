process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const whichStyleCostsLess = (style1_floorTiling, style1_wallPaint, style2_floorTiling, style2_wallPaint) => {
    const style1_cost = style1_wallPaint + style1_floorTiling;
    const style2_cost = style2_wallPaint + style2_floorTiling;
    
    const minCost = Math.min(style1_cost, style2_cost);
    console.log(minCost);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
});