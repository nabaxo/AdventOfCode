const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().replace(/\r\n/g, '\n').split('\n').map(e => e.split(''));
const input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g, '\n').split('\n').map(e => e.split(''));

let gamma = [];
let epsilon = [];

for (let i = 0; i < input[0].length; i++) {
    let zeroes = 0;
    let ones = 0;
    for (let j = 0; j < input.length; j++) {
        const element = parseInt(input[j][i]);

        if (element === 0) {
            zeroes++;
        }
        if (element === 1) {
            ones++;
        }
    }

    if (zeroes > ones) {
        gamma[i] = 0;
        epsilon[i] = 1;
    } else {
        gamma[i] = 1;
        epsilon[i] = 0;
    }
}

console.log(gamma);


// Stolen from StackOverflow
function bin2dec(binStr) {
    const lastIndex = binStr.length - 1;
    let total = 0;

    for (let i = 0; i < binStr.length; i++) {
        if (binStr[lastIndex - i] === '1') {
            total += (2 ** i);
        }
    }

    return total;
}

console.log(bin2dec(gamma.join('')) * bin2dec(epsilon.join('')));
