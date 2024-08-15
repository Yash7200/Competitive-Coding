process.stdin.setEncoding("utf-8");

const isPageOfSport = (pageNum) => {
    (pageNum > 7)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const pageNum = Number(input.trim());
    
    isPageOfSport(pageNum);
});