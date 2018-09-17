let fac = n => n < 1 ? 1 : n * fac(n - 1);
console.log('factorial of 4 =', fac(4));