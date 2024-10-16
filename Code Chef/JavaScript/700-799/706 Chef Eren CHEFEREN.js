let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countTotalDuration = (totalEpisodes, evenEpisodesDuration, oddEpisodesDuration) => {
    const isTotalEpisodesEven = (totalEpisodes % 2) === 0;
    
    const evenEpisodesCount = parseInt(totalEpisodes / 2);
    const oddEpisodesCount = totalEpisodes - evenEpisodesCount;
    
    const totalDuration = (evenEpisodesCount * evenEpisodesDuration) + (oddEpisodesCount * oddEpisodesDuration);
    
    console.log(totalDuration);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [totalEpisodes, evenEpisodeDuration, oddEpisodeDuration] = testcase;
        countTotalDuration(totalEpisodes, evenEpisodeDuration, oddEpisodeDuration);
    });
});