let input = '';
process.stdin.on('data', (data) => input += data);

const modifyInput = (strArray) => {
    strArray.shift();
    const modifiedArray = strArray.filter((_, index) => (index % 2) !== 0).map((item) => item.trim());
    
    return modifiedArray;
};

const getGuestEntryCount = (queue) => {
    queue = queue.split('');
    
    let boys = 0, girls = 0;
    let guestsCount = 0;
    
    const isTwiceBoys = () => boys > (2 * girls);
    
    queue.some((guest) => {
        (guest === 'B') ? ++boys : ++girls;
        ++guestsCount;
        return isTwiceBoys();
    });
    
    console.log(guestsCount);
};

process.stdin.on('end', () => {
    const testcases = modifyInput(input.trim().split('\n'));

    testcases.forEach((queue) => getGuestEntryCount(queue));
});
