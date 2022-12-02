const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split(',').map(e => parseInt(e, 10)).sort();
const input = fs.readFileSync('./input.txt').toString().split(',').map(e => parseInt(e)).sort();

let count = new Array(9).fill(0);
input.forEach(n => count[n]++);

for (let index = 0; index < 256; index++) {

    let spawn = count[0];

    count[8] = count.shift();
    count[6] += spawn;
}

console.log(count.reduce((p, c) => p + c));
