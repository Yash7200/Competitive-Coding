//Problem Simplification:
    //Chef classifies days in 3 types for each week.
    //1. Cloudy Days
    //2. Rainy Days
    //3. Clear Days

//Logic:
    //subtract cloudy & rainy days from 7
    //Use method chaining.
    //Use array destructuring.
    //Split the input by space.
    //Convert each array element into Number (parseInt won't work).
    //Create function containing our logic


process.stdin.setEncoding("utf-8");

const countClearDays = (rainyDays, cloudyDays) => {
    const clearDays = 7 - rainyDays - cloudyDays;
    console.log(clearDays);
};

process.stdin.on("data", (input) => {
    const [rainyDays, cloudyDays] = input.split(" ").map(Number);
    
    countClearDays(rainyDays, cloudyDays);
});