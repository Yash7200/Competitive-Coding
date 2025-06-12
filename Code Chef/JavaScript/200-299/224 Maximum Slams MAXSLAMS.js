let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const medalsHave = Number(input.trim());
    const medalsNeeded = 25 - medalsHave;
    
    const yearsToGet25Medals = ((medalsNeeded % 4) === 0)
        ? medalsNeeded / 4
        : parseInt(medalsNeeded / 4) + 1
    ;
    console.log(yearsToGet25Medals);
});
