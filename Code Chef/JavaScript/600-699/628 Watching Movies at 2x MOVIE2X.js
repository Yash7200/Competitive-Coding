let input = '';
process.stdin.on('data', (data) => input += data);

const countTimeWatchedMovie = (movieLength, goodAfter) => {
    const timeWatchedMovie = movieLength - (goodAfter / 2);
    console.log(timeWatchedMovie);
};

process.stdin.on('end', () => {
    const [movieLength, goodAfter] = input.trim().split(' ').map(Number);
    countTimeWatchedMovie(movieLength, goodAfter);
});