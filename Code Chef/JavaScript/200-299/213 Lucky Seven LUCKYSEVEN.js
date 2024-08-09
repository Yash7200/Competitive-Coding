//Problem Simplification:
    //Chef sees 10 letter word everyday.
    //He considers 7th letter as his lucky letter.

//Logic:
    //Set Encoding.
    //Create event listener that listens to data.
    //We'll have a single 10 character string as input.
    //Print 6th Index (counting from 0).

process.stdin.setEncoding("utf-8");
process.stdin.on("data",(input) => {
    console.log(input[6]);
});