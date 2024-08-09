//Problem Simplification:
    //Accused is convicted if prosecutionPower is exact or more than defensePower.

//Logic for string to Integer:
    //We'll receive 2 space separated integers as string. Ex. "1 2"
    //To convert received input into integer from the string we will use method chaining.
    //We'll use trim method inside to remove space around input then chain it with split method to split string integer from space. Ex ["1", "2"]
    //Chain the output of split method with map method & inside that use Number keyword to convert string item of subarray to string. Ex [1, 2]
    //Use destructuring over array to store array values into variables prosecutionPower & defensePower.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //In function call, pass prosecutionPower & defensePower.
    //In function declaration, use ternary if-else condition if prosecutionPower is exact or more than defensePower than print "YES" or "No".

process.stdin.setEncoding("utf-8");

const isConvicted = (prosecutionPower, defencePower) => {
    (prosecutionPower >= defencePower)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const [prosecutionPower, defencePower] = input.trim().split(" ").map(Number);
    
    isConvicted(prosecutionPower, defencePower);
});