//cSpell: disable
const fs = require('fs');

// const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'.split('');
// const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'.split('');
// const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'.split('');
const input = fs.readFileSync('./input.txt').toString().split('');

let start = input.splice(0, 14);

let c = 13;
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
