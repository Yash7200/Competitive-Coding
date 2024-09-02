process.stdin.setEncoding('utf-8');

const howManyWeeksAchievedTarget = (weeks) => {
    let weeksPracticedProperly = 0;
    
    weeks.forEach((problems) => {
        (problems >= 10)
            ? ++weeksPracticedProperly
            : {};
    });
    
    console.log(weeksPracticedProperly);
};

process.stdin.on('data', (input) => {
    const weeks = input.trim().split(' ').map(Number);
    
    howManyWeeksAchievedTarget(weeks);
});