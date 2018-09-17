const fun = (x, y) => y === 0 ? x : fun(x + 1, y - 1);
console.log(fun(10,5));