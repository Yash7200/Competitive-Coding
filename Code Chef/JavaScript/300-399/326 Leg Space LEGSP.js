process.stdin.setEncoding("utf-8");

const isChefHappy = (students, busCapacity) => {
    (students < busCapacity)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const [students, busCapacity] = input.trim().split(" ").map(Number);
    isChefHappy(students, busCapacity);
});