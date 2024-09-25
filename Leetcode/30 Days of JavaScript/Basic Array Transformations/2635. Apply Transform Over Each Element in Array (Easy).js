const map = (arr, fn) => {
    const transformedArr = [];
    arr.forEach((element, index)=>{
        transformedArr.push(fn(element, index));
    });
    return transformedArr;
};
