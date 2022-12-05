const fs = require('fs');

const input_crates = rotateMatrix(fs.readFileSync('./input_1.txt').toString()
    .split(/\r\n/g).map(e => e.split(' ')));
const moves = fs.readFileSync('./input_2.txt').toString().split(/\r\n/g)
    .map(e => e.split(' ').map(e => parseInt(e)));

function rotateMatrix(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]).reverse());
}

let crates = input_crates.map(e => e.filter(e => e !== '[-]'));

for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves[i][0]; j++) {
        let popped = crates[moves[i][1] - 1].pop();
        crates[moves[i][2] - 1].push(popped);
    }
}

let output = [];

for (let i = 0; i < crates.length; i++) {
    let e = crates[i].pop();
    output.push(e);
}

console.log(output.join('').replaceAll('[', '').replaceAll(']', ''));
