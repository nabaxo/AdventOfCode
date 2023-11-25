// const file = Bun.file('./test_input.txt');
const file = Bun.file('./input.txt');

const string = await file.text();
const input = string.split(/\r\n/g).map(e => parseInt(e));

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

console.log(Math.max(...elves));
