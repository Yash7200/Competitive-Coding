let input = '';
process.stdin.on('data', (data) => input += data);

const canReleasedOnParole = (daysSpent) => {
    (daysSpent >= 7)
        ? console.log('Yes')
        : console.log('No');
};

process.stdin.on('end', () => {
    const daysSpent = Number(input.trim());
    canReleasedOnParole(daysSpent);
});