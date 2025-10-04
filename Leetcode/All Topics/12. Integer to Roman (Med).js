const intToRoman = (num) => {
  const map = [
    { val: 1000, sym: 'M' },
    { val: 900, sym: 'CM' },
    { val: 500, sym: 'D' },
    { val: 400, sym: 'CD' },
    { val: 100, sym: 'C' },
    { val: 90, sym: 'XC' },
    { val: 50, sym: 'L' },
    { val: 40, sym: 'XL' },
    { val: 10, sym: 'X' },
    { val: 9, sym: 'IX' },
    { val: 5, sym: 'V' },
    { val: 4, sym: 'IV' },
    { val: 1, sym: 'I' },
  ];

  let romanStr = '';
  for (let i = 0; i < map.length; i++) {
    while (num >= map[i].val) {
      romanStr += map[i].sym;
      num -= map[i].val;
    }

    if(num === 0) break;
  }

  return romanStr;
};
