let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const hours = Number(input.trim());
    
    const hoursLeft = 24 - hours;
    console.log(hoursLeft);
});
