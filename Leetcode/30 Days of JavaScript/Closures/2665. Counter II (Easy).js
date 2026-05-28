/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
*/

const createCounter = (init) => {
    let currentValue = init;
    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => currentValue = init,
    };
};