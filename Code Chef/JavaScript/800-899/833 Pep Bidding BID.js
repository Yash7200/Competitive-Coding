let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    let firstItemIndex, lastItemIndex;
    
    const combinedInput = strArray.reduce((acc, _, index, arr) => {
        if((index % 5) === 4){
            lastItemIndex = index + 1;
            firstItemIndex = lastItemIndex - 4;
            
            acc.push( arr.slice(firstItemIndex, lastItemIndex) );
        }
        
        return acc;
    }, []);

    const intArray = combinedInput.map((strSubArr) => 
        strSubArr.reduce((acc, strItem) => {
            strItem = strItem.trim();
            if(strItem.includes(' ')){
                acc.push(strItem.split(' ').map(Number));
            }else{
                acc.push([Number(strItem)]);
            }
            return acc;
        }, [])
    );
    
    return Promise.resolve(intArray);
};

const mergeInputs = (intArray) => {
    const mergedInput = intArray.reduce((acc, testcase) => {
        acc.push({
            teamA: { attack: testcase[0], deffence: testcase[1] },
            teamP: { attack: testcase[2], deffence: testcase[3] }
        })
        return acc;
    }, []);
    
    return mergedInput;
};

const getTeamSkillPower = (teamSkill) => teamSkill.reduce((acc, item) => acc + item, 0);

const findTeamForBidding = (teamA, teamP) => {
    const teamAattackPower = getTeamSkillPower(teamA.attack);
    const teamAdeffencePower = getTeamSkillPower(teamA.deffence);
    
    const teamPattackPower = getTeamSkillPower(teamP.attack);
    const teamPdeffencePower = getTeamSkillPower(teamP.deffence);
    
    const teamForBidding = ((teamAattackPower > teamPattackPower) && (teamAdeffencePower > teamPdeffencePower))
            ? 'A'
            : ((teamPattackPower > teamAattackPower) && (teamPdeffencePower > teamAdeffencePower))
                ? 'P'
                : 'DRAW'
    console.log(teamForBidding);
    
}

process.stdin.on('end', async() => {
    const testcases = await strToInt(input.trim().split('\n').slice(1))
    .then((intArray) => mergeInputs(intArray));
    
    testcases.forEach((testcase) => {
        const { teamA, teamP } = testcase;
        findTeamForBidding(teamA, teamP);
    });
});
