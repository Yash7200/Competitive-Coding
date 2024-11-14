let input = '';
process.stdin.on('data', (data) => input += data);

const countMinPay = (popcornPrice, drinkPrice, comboPrice) => {
    const individualBuyCost = (2 * popcornPrice) + (3 * drinkPrice);
    const comboOfferCost = (2 * comboPrice) + drinkPrice;

    const minPay = Math.min(individualBuyCost, comboOfferCost);
    console.log(minPay);
};

process.stdin.on('end', () => {
    const [popcornPrice, drinkPrice, comboPrice] = input.trim().split(' ').map(Number);
    countMinPay(popcornPrice, drinkPrice, comboPrice);
});
