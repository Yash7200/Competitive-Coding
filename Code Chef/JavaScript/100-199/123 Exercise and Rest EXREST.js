let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const totalRestDays = Number(input.trim());
    
    const totalDays = totalRestDays * 3;
    console.log(totalDays);
});
