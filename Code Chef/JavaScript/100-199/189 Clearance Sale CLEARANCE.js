process.stdin.setEncoding("utf-8");

const countTotalTshirts = (paidTshirts) => {
    const freeTshirts = paidTshirts / 2;
    const totalTshirts = paidTshirts + freeTshirts;
    
    console.log(totalTshirts);
}

process.stdin.on("data", (input) => {
    const paidTshirts = Number(input.trim());
    
    countTotalTshirts(paidTshirts);
});