let input = '';
process.stdin.on('data', (data) => input += data);

const isIOIongoing = (date) => {
    (date < 9)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const date = Number(input.trim());
    isIOIongoing(date);
});