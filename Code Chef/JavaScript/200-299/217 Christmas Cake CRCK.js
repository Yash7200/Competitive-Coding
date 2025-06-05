let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const date = Number(input.trim());
    
    const cakesToBeBaked = 25 - date;
    console.log(cakesToBeBaked)
});
