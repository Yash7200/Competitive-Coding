//Problem Simplification:
    //Take number as input & print it as output

//Logic:
    //set Encoding
    //Trim white spaces & convert it to integer
    //numberMirror function prints the number

process.stdin.setEncoding('utf8');

const numberMirror = (n) => {
   console.log(n);
}

process.stdin.on('data', (input)=> {
   const n = parseInt(input.trim()); 
   numberMirror(n);
});