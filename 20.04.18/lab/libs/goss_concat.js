const concat = (...args) => [...args].reduce((x, y) => `${x}${y}`);
export default concat;