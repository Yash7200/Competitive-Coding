//Problem Simplification:
    //We're given 2 costs.
    //1. Cost of College Mess (6 days).
    //2. Cost of Sunday (Restaurant Meal).

//Logic:
    //Perform multiplication of college mess' cost then add it with cost of Sunday restaurant

process.stdin.setEncoding("utf-8");

const costCalculation = (weekCost, sundayCost) => {
    const totalCost = (weekCost * 6) + sundayCost;
    return totalCost;
};

process.stdin.on("data",(input) => {
   const num = input.trim().split(" ");
   
   const messCost = parseInt(num[0]);
   const restaurantCost = parseInt(num[1]);
   
   const expense = costCalculation(messCost, restaurantCost);
   console.log(expense);
});