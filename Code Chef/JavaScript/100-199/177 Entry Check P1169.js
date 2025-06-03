let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const ageOfChef = Number(input.trim());
    
    const canChefEnter = (ageOfChef < 10) ? 'NO' : 'YES';
    console.log(canChefEnter);
});
