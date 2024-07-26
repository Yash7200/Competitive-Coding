//Problem Simplification:
    //Calculate total Rent

//Logic:
    //We will receive the rent for single person.
    //We need to calculate the rent for both Chef & Chefina.
    //Create a function to count the rent which doubles the input value.

process.stdin.setEncoding("utf-8");

const countRent = (rentPerPerson) => {
    console.log(2 * rentPerPerson);
};

process.stdin.on("data", (input) => {
    const initialRent = parseInt(input.trim());
    
    countRent(initialRent);
});