const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e);

const alphabet = ['-', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function* chunks(arr, n) {
    for (let index = 0; index < arr.length; index += n) {
        yield arr.slice(index, index + n);
    }
}

const triplets = [...chunks(input, 3)];

const output = triplets.map(e => e.map(c => c.split(''))).map(e => {
    // console.log(e[0]);
    return e[0].filter(c => {
        if (e[1].includes(c) && e[2].includes(c)) {
            return c;
        }
    });
}).flatMap(e => {
    return [...new Set(e)];
}).reduce((a, c) =>
    a + alphabet.indexOf(c), 0
);

console.log(output);
