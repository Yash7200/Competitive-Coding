//Problem Simplification:
    //We're supposed to determine who made more sales Chef or Chefina.
    //We'll receive 3 things in input items price of Chef, items price of Chefina, sold no. of items.

//Logic for string to Integer:
    //We'll receive space separated integers as string. Ex. "1 2"
    //To convert received input first integer from the string we will use method chaining.
    //We'll use trim method inside to remove space around input then chain it with split method to split string integer from space. Ex ["1", "2"]
    //Chain the output of split method with map method & inside that use Number keyword to convert string item of subarray to string. Ex [1, 2]
    //Use destructuring over array to store array values into variables.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //In function declaration, create 3 actual parameters: itemsPriceOfChef, itemsPriceOfChefina, soldItems & during function call pass accordingly.
    //calculate sales of chef & chefina using multiplication with price & sold items.
    //Use ternary if-else for comparison & printing the message.

process.stdin.setEncoding("utf-8");

const findMaxSales = (itemsPriceOfChef, itemsPriceOfChefina, soldItems) => {
    const sellsOfChef = itemsPriceOfChef * soldItems;
    const sellsOfChefina = itemsPriceOfChefina * soldItems;
    
    (sellsOfChef > sellsOfChefina)
        ? console.log(sellsOfChef)
        : console.log(sellsOfChefina);
};

process.stdin.on("data", (input) => {
    const [ a, b, c] = input.trim().split(" ").map(Number);
    findMaxSales(a, b, c);
});