//Problem Simplification:
    //We're supposed to determine if Rahul can write 5 page of assignment in 60 mins or not.

//Logic for String to Integer:
    //In data event listener (for receiving input), We will receive single integer as string.
    //To convert that string to integer use Number function & use trim method inside it to remove space around it.

//Logic:
    //Create function containing core logic to solve problem.
    //In function declaration, create parameter for denoting speed of writing a page in minutes.
    //Calculate total time by multiplying speed of writing single page by 5.
    //Compare total time with ternary if-else. If its less or equal to 60 then print "YES" otherwise "NO"

process.stdin.setEncoding("utf-8");

const canFinishInTime = (minutesPerPage) => {
    const totalTime = minutesPerPage * 5;
    (totalTime <= 60)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const timePerPage = Number(input.trim());
    canFinishInTime(timePerPage);
});