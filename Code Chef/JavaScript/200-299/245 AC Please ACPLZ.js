//Problem Simplification:
    //Chef wants to save environment so he will turn on the AC only if temperature is more than 30

//Logic:
    //We'll receive single integer as string.
    //Remove the space around integer using trim method.
    //Use trim method inside Number function inside in it.
    //Create separate function containing core logic, in that function call pass received integer after conversion.
    //In side function use ternary if-else to check whether ac can be turned on print "YES" or "NO".

process.stdin.setEncoding("utf-8");

const isAcOn = (temperature) => {
    (temperature > 30)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    isAcOn(Number(input.trim()));
});