let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const totalRuns = Number(input.trim());
    
    const total6s = parseInt(totalRuns / 6);
    console.log(total6s);
});
