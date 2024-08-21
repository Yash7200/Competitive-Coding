process.stdin.setEncoding("utf-8");

const isAQIbelow100 = (aqi) => {
    (aqi < 100)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const aqi = Number(input.trim());
    
    isAQIbelow100(aqi);
});