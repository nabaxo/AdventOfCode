const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split('\r\n').map(e => e.split('|'));
const input = fs.readFileSync('./input.txt').toString().split('\r\n').map(e => e.split('|'));

let count = 0;

for (let i = 0; i < input.length; i++) {
    const element = input[i][1].trim().split(' ').map(e => e.split(''));

    for (let j = 0; j < element.length; j++) {
        const digit = element[j];
        if (digit.length === 2 || digit.length === 4 || digit.length === 3 || digit.length === 7) {
            count++;
        }
    }
}

console.log(count);
