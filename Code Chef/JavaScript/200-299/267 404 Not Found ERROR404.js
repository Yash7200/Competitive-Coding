//Problem Simplification:
    //Chef makes a website, if response case is 404 it will return "NOT FOUND" otherwise it'll return "FOUND".

//Logic:
    //We will receive single integer as string.
    //To convert that integer to the string use Number function & use trim method inside it to remove space around it.
    //Create function containing core logic to solve problem.
    //In function declaration, use ternary if-else check for 404 httpStatusCode. In case of 404 print "NOT FOUND" otherwise print "FOUND".

process.stdin.setEncoding("utf-8");

const isWebsiteFound = (httpStatusCode) => {
    (httpStatusCode === 404)
        ? console.log("NOT FOUND")
        : console.log("FOUND");
};

process.stdin.on("data", (input) => {
    const httpStatusCode = Number(input.trim());
    
    isWebsiteFound(httpStatusCode);
});