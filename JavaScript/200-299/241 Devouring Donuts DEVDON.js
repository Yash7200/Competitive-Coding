//Problem Simplification:
    //Chef eats the donuts & want to count calories of all donuts the he ate.

//Logic:
    //Set encoding & create input listener.
    //Use method chaining.
    //We will receive input as string so we need to convert it into integer.
    //In input there can be white space around input so use trim method to remove it.
    //split the string from white space & use map method over the array created by split method to convert string items into Number.
    //Destructure variables from array elements.
    //create function containing core logic to solve problem.
    //We need to multiply no. of donuts ate by chef with calories of each donut.

process.stdin.setEncoding("utf-8");

const caloriesCalc = (totalDonuts, calories) => {
    const totalCalories = totalDonuts * calories;
    console.log(totalCalories);
};

process.stdin.on("data", (input) => {
    const [donuts, calories] = input.trim().split(" ").map(Number);
    
    caloriesCalc(donuts, calories);
});