let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [daysNeeded, daysLeft] = input.trim().split(' ').map(Number);
    
    const canFinishInTime = (daysNeeded > daysLeft) ? 'NO' : 'YES';
    console.log(canFinishInTime);
});
