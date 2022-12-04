const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split(','));
const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e.split(','));

function convertToArray(n) {
    let result = [];
    const number = n.split('-');

    for (let c = parseInt(number[0]); c <= parseInt(number[1]); c++) {
        result.push(c);
    }

    return result;
}

const arr = input.map(e => e.map(f => convertToArray(f)));

let output = 0;

for (let index = 0; index < arr.length; index++) {
    const element = arr[index].sort((a, b) => {
        return a.length - b.length;
    });

    const allOverlap = element[0].every(e => {
        return element[1].indexOf(e) !== -1;
    });
    if (allOverlap) {
        output++;
    }
}

console.log(output);
