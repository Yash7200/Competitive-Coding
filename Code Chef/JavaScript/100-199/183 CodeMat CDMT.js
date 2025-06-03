let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [lastYearCandidates, thisYearCandidates] = input.trim().split(' ').map(Number);
    
    const hasMoreCandidates = (thisYearCandidates > lastYearCandidates) ? 'Yes' : 'No';
    console.log(hasMoreCandidates);
});
