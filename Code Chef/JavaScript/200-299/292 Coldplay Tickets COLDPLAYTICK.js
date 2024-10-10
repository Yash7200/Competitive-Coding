let input = '';
process.stdin.on('data', (data) => input += data);

const findAmountToPay = (friends) => {
    const amountToPay = (friends + 1) * 5000;
    console.log(amountToPay);
};

process.stdin.on('end', () => {
    const friends = Number(input.trim());
    findAmountToPay(friends);
});