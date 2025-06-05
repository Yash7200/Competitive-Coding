let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [restAfter, finishAfter] = input.trim().split(' ').map(Number);
    
    const restCount = (restAfter >= finishAfter) ? 0
        : ((finishAfter % restAfter) === 0)
            ? (finishAfter / restAfter) - 1
            : parseInt(finishAfter / restAfter)
    ;
    console.log(restCount);
});
