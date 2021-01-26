const asyncLocalStorage = {
  setItem: (key, value) =>
    Promise.resolve().then(() => {
      localStorage.setItem(key, value);
    }),
  getItem: (key) => Promise.resolve().then(() => localStorage.getItem(key)),
};

export default asyncLocalStorage;
