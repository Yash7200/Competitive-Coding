process.stdin.setEncoding("utf-8");

const is5starRating = (oldRating, changeInRating) => {
    const currentRating = oldRating + changeInRating;
    (currentRating >= 2000)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const [oldRating, changeInRating] = input.trim().split(" ").map(Number);
    is5starRating(oldRating, changeInRating);
});