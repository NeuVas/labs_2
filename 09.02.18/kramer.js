const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];

const d=a1*b2 - a2*b1;
const dx=c1*b2-c2*b1;
const dy=a1*c2-c1*a2;

const x=dx/d;
const y=dy/d;

console.log(`x=${x}`,`y=${y}`)