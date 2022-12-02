const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => parseInt(e));
const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => parseInt(e));

let elves = [];
let elf = 0;

for (let index = 0; index < input.length; index++) {
    const element = input[index];

    if (!isNaN(element)) {
        elf = elf + element;
    } else {
        elves.push(elf);
        elf = 0;
    }
}

let output = elves.sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a + c);

console.log(output);
