const expect = (value) => {
  return {
    toBe: (newValue) => {
      if (value === newValue) return true;
      throw new Error("Not Equal");
    },
    notToBe: (newValue) => {
      if (value !== newValue) return true;
      throw new Error("Equal");
    }
  };
};