let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [iq, difficultyLevel] = input.trim().split(' ').map(Number);
    
    const canSolveProblem = (difficultyLevel * 10) <= iq ? 'YES' : 'NO';
    console.log(canSolveProblem);
});
