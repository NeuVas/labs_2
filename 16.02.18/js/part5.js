// A
function d (y) {
    return this ** y;
}
console.log(d.bind(Math.PI)(2));
//B
const degree = x => y => x ** y;
console.log(degree(2)(3)); // 2^3 = 8
