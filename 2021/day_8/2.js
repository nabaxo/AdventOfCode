const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split('\r\n').map(e => e.split('|'));
const input = fs.readFileSync('./input.txt').toString().split('\r\n').map(e => e.split('|'));

let count = 0;

for (let i = 0; i < input.length; i++) {
    let unsortedDigits = input[i][0].trim().split(' ').map(e => e.split('')).sort((a, b) => a.length - b.length);
    let digits = [];
    const element = input[i][1].trim().split(' ').map(e => e.split(''));
    let sevenSegments = new Array(7).fill('');

    for (let index = 0; index < unsortedDigits.length; index++) {
        const element = unsortedDigits[index];
        // one
        if (element.length === 2) {
            digits[1] = unsortedDigits.splice(index, 1)[0];
            index--;
        }
        // seven
        if (element.length === 3) {
            digits[7] = unsortedDigits.splice(index, 1)[0];
            index--;
        }
        // four
        if (element.length === 4) {
            digits[4] = unsortedDigits.splice(index, 1)[0];
        }
        // eight
        if (element.length === 7) {
            digits[8] = unsortedDigits.splice(index, 1)[0];
        }
    }
    sevenSegments[0] = digits[7].filter(n => !digits[1].includes(n))[0];

    // six
    for (let index = 3; index < unsortedDigits.length; index++) {
        if (!digits[1].every(n => unsortedDigits[index].includes(n))) {
            sevenSegments[2] = digits[1].filter(n => !unsortedDigits[index].includes(n))[0];
            sevenSegments[5] = digits[1].filter(n => !sevenSegments.includes(n))[0];
            digits[6] = unsortedDigits[index];
        }
    }
    unsortedDigits.splice(unsortedDigits.indexOf(digits[6]), 1);

    // five
    for (let index = 0; index < 3; index++) {
        if (digits[6].filter(n => !unsortedDigits[index].includes(n)).length === 1) {
            sevenSegments[4] = digits[6].filter(n => !unsortedDigits[index].includes(n))[0];
            digits[5] = unsortedDigits[index];
        }
    }
    unsortedDigits.splice(unsortedDigits.indexOf(digits[5]), 1);

    // three
    for (let index = 0; index < 2; index++) {
        const element = unsortedDigits[index];

        if (element.includes(sevenSegments[2]) && element.includes(sevenSegments[5])) {
            digits[3] = element;
        }
    }
    unsortedDigits.splice(unsortedDigits.indexOf(digits[3]), 1);

    // two
    digits[2] = unsortedDigits.splice(0, 1)[0];

    // zero
    for (let index = 0; index < unsortedDigits.length; index++) {
        const element = unsortedDigits[index];

        if (element.includes(sevenSegments[4])) {
            digits[0] = element;
        }
    }
    unsortedDigits.splice(unsortedDigits.indexOf(digits[0]), 1);

    // nine
    digits[9] = unsortedDigits.splice(0, 1)[0];

    let output = [];

    for (let index = 0; index < element.length; index++) {
        const entry = element[index];

        for (let j = 0; j < digits.length; j++) {
            const digit = digits[j];

            if (digit.length === entry.length && digit.every(d => entry.includes(d))) {
                output.push(j);
            }
        }
    }

    output = parseInt(output.join(''));

    count = count + output;
}

console.log(count);
