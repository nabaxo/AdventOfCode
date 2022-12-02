const fs = require('fs');

// let input = fs.readFileSync('./test_input.txt').toString().replace(/\r\n/g, '\n').split('\n').map(e => e.split(''));
const input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g, '\n').split('\n').map(e => e.split(''));

let oxygen = input;
let co2 = input;

for (let i = 0; i < input[0].length; i++) {
    if (oxygen.length > 1) {
        let zeroes = 0;
        let ones = 0;
        for (let j = 0; j < oxygen.length; j++) {

            const element = parseInt(oxygen[j][i]);

            if (element === 0) {
                zeroes++;
            }
            if (element === 1) {
                ones++;
            }
        }

        oxygen = oxygen.filter(d => {
            if (ones >= zeroes) {
                return d[i] === '1';
            }
            return d[i] === '0';
        });
    }

    if (co2.length > 1) {
        let zeroes = 0;
        let ones = 0;

        for (let j = 0; j < co2.length; j++) {
            const element = parseInt(co2[j][i]);

            if (element === 0) {
                zeroes++;
            }
            if (element === 1) {
                ones++;
            }
        }

        co2 = co2.filter(d => {
            if (ones > zeroes) {
                return d[i] === '0';
            }
            return d[i] === '1';
        });
    }
}

oxygen = oxygen[0].join('');
co2 = co2[0].join('');

console.log(oxygen);
console.log(co2);

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

console.log(bin2dec(oxygen) * bin2dec(co2));
