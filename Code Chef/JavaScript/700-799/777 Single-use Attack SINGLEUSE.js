let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinAttacks = (bossHealth, damagePerMove, specialDamage) => {
    let minAttacks = 1;
    bossHealth -= specialDamage;
    
    minAttacks = (bossHealth > 0)
        ? minAttacks + Math.ceil(bossHealth / damagePerMove)
        : minAttacks;
    console.log(minAttacks);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bossHealth, damagePerMove, specialDamage] = testcase;
        countMinAttacks(bossHealth, damagePerMove, specialDamage);
    });
});