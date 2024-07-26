//Problem Simplification:
    //We need to categorize sleep PERFECT (== 8 Hrs), MORE (> 8 Hrs) or LESS (< 8 Hrs)

//Logic:
    //We will receive single integer as string.
    //To convert that integer to the string use Number function & use trim method inside it to remove space around it.
    //Create function containing core logic to solve problem.
    //Use nested ternary if-else for comparison & print the message.

process.stdin.setEncoding("utf-8");

const howIsSleepSchedule = (sleepInHrs) => {
    (sleepInHrs === 8)
        ? console.log("PERFECT")
        : (sleepInHrs > 8)
            ? console.log("MORE")
            : console.log("LESS");
}

process.stdin.on("data", (input) => {
   const sleepingHours = Number(input.trim());
   
   howIsSleepSchedule(sleepingHours);
});