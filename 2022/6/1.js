//cSpell: disable
const fs = require('fs');

// const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'.split('');
// const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'.split('');
const input = fs.readFileSync('./input.txt').toString().split('');

let start = input.splice(0, 4);

let c = 3;
let length = input.length;

for (let index = 0; index < length; index++) {
    const element = input.shift();
    c++;
    if (!checkDupes(start)) {
        console.log(c);
        break;
    }
    start.shift();
    start.push(element);
}

function checkDupes(arr) {
    return arr.length !== new Set(arr).size;
}
