let input = '';
process.stdin.on('data', (data) => input += data);

const strToIntObj = (strArray) => {
    strArray.shift();
    const intObjArray = strArray.reduce((acc, item, index) => {
        if(item.includes(' ')) return acc;
        
        let payload = [];
        for(let i = index + 1; i <= (index + Number(item)); i++){
            const [rating, cost] = strArray[i].trim().split(' ').map(Number);
            payload.push({rating, cost});
        }
        acc.push(payload);
        
        return acc;
    }, []);
    return intObjArray;
};

const getBestMinCostMovie = (movieObjArray) => {
    const bestMoviesCost = movieObjArray.filter((movie) => movie.rating >= 7).map((movie) => movie.cost);
    const minCostMovie = (!bestMoviesCost.length) ? -1 : Math.min(...bestMoviesCost);
    console.log(minCostMovie);
};

process.stdin.on('end', () => {
    const testcases = strToIntObj(input.trim().split('\n'));
    
    testcases.forEach((movieObjArray) => getBestMinCostMovie(movieObjArray));
});
