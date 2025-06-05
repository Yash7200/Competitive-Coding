let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const totalRuns = Number(input.trim());
    
    const msg = (totalRuns < 7) ? 'BOOM' : 'THALA';
    console.log(msg);
});
