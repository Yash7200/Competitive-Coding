let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [loc, errLines] = input.trim().split(' ').map(Number);
    
    const proOrNewbie = (errLines >= (loc / 2)) ? 'NEWBIE' : 'PRO';
    console.log(proOrNewbie);
});
