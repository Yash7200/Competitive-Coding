let input = '';
process.stdin.on('data', (data) => (input += data));

const strToInt = (strArray) => {
  strArray.shift();
  const intArray = strArray
    .filter((_, index) => index % 2 === 1)
    .map((item) =>
      item.includes(' ')
        ? item.trim().split(' ').map(Number)
        : [Number(item.trim())]
    );

  return intArray;
};

const canWeBalanceLighting = (lightings) => {
  let redLightCount = lightings.filter((item) => item === 1).length;
  let blueLightCount = lightings.filter((item) => item === 2).length;

  let pendingLights = lightings.length - redLightCount - blueLightCount;

  const isSameFixedLights = () => redLightCount === blueLightCount;

  if (isSameFixedLights() && !pendingLights) {
    console.log('Yes');
  } else {
    for (let i = pendingLights; i > 0; i--) {
      if (redLightCount < blueLightCount) {
        ++redLightCount;
      } else {
        ++blueLightCount;
      }
    }
    (isSameFixedLights())
      ? console.log('Yes')
      : console.log('No')
    ;
  }
};

process.stdin.on('end', () => {
  const testcases = strToInt(input.trim().split('\n'));

  testcases.forEach((lightings) => canWeBalanceLighting(lightings));
});
