const isPalindrome = (number) => {
    number = String(number);
    const reversedNumber = number.split('').reverse().join('');

    if(number === reversedNumber) return true;

    return false;
};