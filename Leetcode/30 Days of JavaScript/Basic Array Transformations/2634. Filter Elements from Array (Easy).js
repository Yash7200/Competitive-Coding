const filter = (arr, fn) => {
    const filteredArr = [];
    arr.forEach((item, index) => {
        const result = fn(item, index);
        (result)
            ? filteredArr.push(item)
            : {};
    });
    return filteredArr;
};