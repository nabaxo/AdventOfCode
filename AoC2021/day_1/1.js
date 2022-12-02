const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g, '\n').split('\n').map(e => parseInt(e));

let output = 0;

for (let index = 1; index < input.length; index++) {
    const prevElement = input[index - 1];
    const element = input[index];

    if (element > prevElement) {
        output++;
    }
}

console.log(output);
