// Problem Simplification:
    // Check if Codechef round is held on given day

// Logic:
    // Codechef are held on Wednesday.
    // If its 4th day then its Wednesday.
    // Create function to check if its Wednesday.
    // Use ternary if-else to check if its 4th day.

process.stdin.setEncoding("utf-8");

const isWednesday = (day) => {
    (day === 4)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data",(input)=>{
   const day = parseInt(input.trim());
   
   isWednesday(day);
});