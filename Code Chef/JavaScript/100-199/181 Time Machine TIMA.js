let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const currentYear = Number(input.trim());
    
    const canGoTo2050 = (currentYear + 25) >= 2050 ? 'Yes' : 'No';
    console.log(canGoTo2050);
});
