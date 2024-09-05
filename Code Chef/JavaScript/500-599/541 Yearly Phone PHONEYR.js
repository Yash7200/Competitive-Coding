let input = '';
process.stdin.on('data', (data) => input += data);

const setModelName = (releaseYear) => {
    const modelName = "K" + releaseYear.slice(-2);
    console.log(modelName);
};

process.stdin.on('end', () => {
    const releaseYear = input.trim();
    setModelName(releaseYear);
});