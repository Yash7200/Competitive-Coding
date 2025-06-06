let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    let hoursLeft = Number(input.trim());
    
    const workHours = [1, 2, 4];
    let finishedTasks = 0;
    
    workHours.forEach((workTime) => {
        if(workTime <= hoursLeft) {
           hoursLeft -= workTime;
            ++finishedTasks;
        }
    });
    
    console.log(finishedTasks);
});
