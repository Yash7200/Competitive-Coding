let input = '';
process.stdin.on('data', (data) => input += data);

const decideUrlToSend = (didPractice, didUseContest) => {
    const practicePage = 'https://www.codechef.com/practice';
    const contestPage = 'https://www.codechef.com/contests';
    const discussionPage = 'https://discuss.codechef.com';
    
    const urlToSend = (didPractice && didUseContest)
        ? discussionPage
        : (didPractice && !didUseContest)
            ? contestPage
            : practicePage;

    console.log(urlToSend);
};

process.stdin.on('end', () => {
    const [didPractice, didUseContest] = input.trim().split(' ').map(Number);
    decideUrlToSend(didPractice, didUseContest);
});