//Problem Simplification:
    //Chef collects clovers
    //One of them is 4 leave clover.
    //Count total leaves.

//Logic:
    //We receive no. of clovers collected by Chef.
    //Create a function to count Total Leaves/
    //1 is 4 Leave Clovers & others are 3 Leaves Clovers
    //Formula: ( (foundClovers-1) * 3 ) + 4

process.stdin.setEncoding("utf-8");

const countTotalLeaves = (clovers) => {
    const totalLeaves = ( (clovers-1) * 3 ) + 4; 
    console.log(totalLeaves);
};

process.stdin.on("data", (input) => {
    const foundClovers = parseInt(input.trim());
    
    countTotalLeaves(foundClovers);
});