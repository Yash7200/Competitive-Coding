// without early exit
const isValid = (s) => {
    const pendingBrackets = [s[0]];
    const strLength = s.length;

    const pairs = {
        '(': ')',
        '[':']',
        '{':'}',
    }

    for(let i=1; i < strLength; ++i){
        const lastBracket = pendingBrackets.at(-1);
        (pairs[lastBracket] === s[i])
            ? pendingBrackets.pop()
            : pendingBrackets.push(s[i])
        ;
    }

    return !pendingBrackets.length;
};

// with early exit & invalid input string length
const isValid = (s) => {
    const pendingBrackets = [s[0]];
    const strLength = s.length;

    if(strLength % 2 !== 0) return false;

    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for(let i=1; i < strLength; ++i){
        const lastBracket = pendingBrackets.at(-1);
        
        if(pairs[lastBracket] === s[i]){
            pendingBrackets.pop();
        } else if(pairs[s[i]]) {
            pendingBrackets.push(s[i]);
        } else {
          return false;
        }
    }
    
    return !pendingBrackets.length;
};