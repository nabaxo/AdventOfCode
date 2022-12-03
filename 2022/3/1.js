const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => {
//     const half = e.length / 2;
//     return e.slice(0, half) + ' ' + e.slice(half, e.length);
// }).map(e => e.split(' '));

const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => {
    const half = e.length / 2;
    return e.slice(0, half) + ' ' + e.slice(half, e.length);
}).map(e => e.split(' '));

const alphabet = ['-', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const output = input.map(e => e.map(f => f.split(''))).map((e) => {
    return e[0].filter(c => {
        if (e[1].includes(c)) {
            return c;
        }
    });
}).flatMap(e => {
    return [...new Set(e)];
}).reduce((a, c) =>
    a + alphabet.indexOf(c), 0
);


console.log(output);
