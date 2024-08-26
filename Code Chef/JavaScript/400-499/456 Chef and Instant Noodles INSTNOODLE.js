process.stdin.setEncoding("utf-8");

const countCustomersServedInTime = (stoves, timeInMins) => {
    const customersServedInTime = stoves * timeInMins;
    console.log(customersServedInTime);
}

process.stdin.on("data", (input) => {
    const [stoves, timeInMins] = input.trim().split(" ").map(Number);
    countCustomersServedInTime(stoves, timeInMins);
});