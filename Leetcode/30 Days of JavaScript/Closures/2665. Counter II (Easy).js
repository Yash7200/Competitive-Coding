const createCounter = (init) => {
    let currentValue = init;
    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => currentValue = init,
    };
};