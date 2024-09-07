let input = '';
process.stdin.on('data', (data) => input += data);

const canChefWin = (topicsPrepared, topicAsked) => {
    (topicsPrepared.includes(topicAsked))
        ? console.log('Yes')
        : console.log('No');
};

process.stdin.on('end', () => {
    const [firstTopicPrepared, secondTopicPrepared, thirdTopicPrepared, topicAsked] = input.trim().split(' ').map(Number);
    
    canChefWin([firstTopicPrepared, secondTopicPrepared, thirdTopicPrepared], topicAsked);
});