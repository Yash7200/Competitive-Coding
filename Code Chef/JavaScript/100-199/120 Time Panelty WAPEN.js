let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [timeUsed, wrongAns] = input.trim().split(' ').map(Number);
    
    const totalPanelty = (wrongAns * 10) + timeUsed;
    console.log(totalPanelty);
});