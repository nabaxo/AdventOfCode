const fs = require('fs');

const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split('')).map(e => e.map(n => parseInt(n)));
// const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e.split('')).map(e => e.map(n => parseInt(n)));

let output = 0;

for (let i = 0; i < input.length; i++) {
    const row = input[i];

    for (let j = 0; j < row.length; j++) {
        const element = input[i][j];
        let n, s, w, e;

        try {
            n = input[i - 1][j];
        } catch (e) { }
        try {
            s = input[i + 1][j];
        } catch (e) { }
        try {
            w = input[i][j - 1];
        } catch (e) { }
        try {
            e = input[i][j + 1];
        } catch (e) { }

        if ((element < n) &&
            (element < e) &&
            (element < s) &&
            (element < w)) {
            output = output + element + 1;
        }

        if (n === undefined) {
            if ((element < e) &&
                (element < s) &&
                (element < w)) {
                output = output + element + 1;
            }
        }
        if (e === undefined) {
            if ((element < n) &&
                (element < s) &&
                (element < w)) {
                output = output + element + 1;
            }
        }
        if (s === undefined) {
            if ((element < n) &&
                (element < e) &&
                (element < w)) {
                output = output + element + 1;
            }
        }
        if (w === undefined) {
            if ((element < n) &&
                (element < s) &&
                (element < e)) {
                output = output + element + 1;
            }
        }
        if (n === undefined && w === undefined) {
            if ((element < e) &&
                (element < s)) {
                output = output + element + 1;
            }
        }
        if (n === undefined && e === undefined) {
            if ((element < w) &&
                (element < s)) {
                output = output + element + 1;
            }
        }
        if (s === undefined && w === undefined) {
            if ((element < e) &&
                (element < n)) {
                output = output + element + 1;
            }
        }
        if (s === undefined && e === undefined) {
            if ((element < n) &&
                (element < w)) {
                output = output + element + 1;
            }
        }

    }
}

// console.table(input);
console.log(output);
