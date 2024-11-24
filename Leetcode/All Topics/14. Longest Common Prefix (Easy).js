const getCommonPrefix = (shortestStr, strArray) => {
    const isCommonPrefix = (prefix) => strArray.every((strItem) => strItem.startsWith(prefix));

    let commonPrefix = '';
    let prefix = '';

    shortestStr.some((char) => {
        prefix += char;
        if(isCommonPrefix(prefix)){
            commonPrefix = prefix;
            return false;
        }
        return true;
    });

    return commonPrefix;
};

const longestCommonPrefix = (strArray) => {
    strArray = strArray.map((strItem) => strItem.trim()).sort((a,b) => a.length - b.length);
    const shortestStr = strArray[0];
    const commonPrefix = getCommonPrefix(shortestStr.split(''), strArray);

    return commonPrefix;
};
