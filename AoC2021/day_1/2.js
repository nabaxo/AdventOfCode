const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g, '\n').split('\n').map(e => parseInt(e));
let output = 0;

let prevSum, sum;

for (let i = 3; i < input.length; i++) {
    prevSum = input[i - 1] + input[i - 2] + input[i - 3];
    sum = input[i] + input[i - 1] + input[i - 2];

    if (sum > prevSum) {
        output++;
    }
}

console.log(output);
