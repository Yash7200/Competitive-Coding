let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isCountryCinTradeSurplus = (countryAexports, countryAimports, countryBexports, countryBimports) => {
    const countryAnetExport = countryAexports - countryAimports;
    const countryBnetExport = countryBexports - countryBimports;
    
    const countryCnetExport = -1 * (countryAnetExport + countryBnetExport);
    (countryCnetExport > 0)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [countryAexports, countryAimports, countryBexports, countryBimports] = testcase;
        isCountryCinTradeSurplus(countryAexports, countryAimports, countryBexports, countryBimports);
    });
});