let input = '';
process.stdin.on('data', (data) => input += data);

const canAIsolve = (difficultyLevel) => {
    (difficultyLevel <= 60)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const difficultyLevel = Number(input.trim());
    canAIsolve(difficultyLevel);
});