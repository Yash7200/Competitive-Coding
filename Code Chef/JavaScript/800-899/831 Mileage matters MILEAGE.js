let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getCarWithLessTravelCost = (distance, petrolCost, dieselCost, petrolMileage, dieselMileage) => {
  const petrolCarTravelCost = (distance * petrolCost) / petrolMileage;
  const dieselCarTravelCost = (distance * dieselCost) / dieselMileage;
  
  const carToRent = (petrolCarTravelCost < dieselCarTravelCost) ? 'PETROL'
    : (dieselCarTravelCost < petrolCarTravelCost) ? 'DIESEL'
    : 'ANY'
  ;
  console.log(carToRent);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [distance, petrolCost, dieselCost, petrolMileage, dieselMileage] = testcase;
        getCarWithLessTravelCost(distance, petrolCost, dieselCost, petrolMileage, dieselMileage);
    });
});
