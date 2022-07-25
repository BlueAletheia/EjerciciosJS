const roundedResult1 = roundTo(2.123, 2);

const roundedResult2 = roundTo(1.123456789, 6);

function roundTo(a, b) {
    let exponential = 10 ** b;
    return Math.round(a * exponential) / exponential;
}

console.log(roundedResult1);
console.log(roundedResult2);