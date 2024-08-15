process.stdin.setEncoding('utf8');

const isErrorProne = (thresholdLimit, workingSpeed) => {
    (workingSpeed > thresholdLimit)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on('data', function(input) {
  const [thresholdLimit, workingSpeed] = input.trim().split(" ").map(Number);
  isErrorProne(thresholdLimit, workingSpeed);
});