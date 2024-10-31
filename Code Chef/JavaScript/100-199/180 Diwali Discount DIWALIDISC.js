let input = '';
process.stdin.on('data', (data) => input += data);

const getBillToPay = (price, discount) => {
    const amountToPay = price - discount;
    console.log(amountToPay);
};

process.stdin.on('end', () => {
    const [price, discount] = input.trim().split(' ').map(Number);
    getBillToPay(price, discount);
});