const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split(',').map(e => parseInt(e));
// const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]; // Test input

const min = Math.min(...input);
const max = Math.max(...input);

let bestFuel = max ** input.length;
let bestPos = min;

for (let pos = 0; pos < max; pos++) {
    let fuel = 0;

    for (let index = 0; index < input.length; index++) {
        const element = Math.abs(input[index] - pos);
        let e = element;
        for (let j = 0; j < element; j++) {
            e += j;
        }
        fuel = fuel + e;
    }

    if (fuel < bestFuel) {
        bestFuel = fuel;
        bestPos = pos;
    }
}

console.log({ bestPos, bestFuel });
