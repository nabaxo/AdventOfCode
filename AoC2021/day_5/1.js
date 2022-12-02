const fs = require('fs');

// Truly a monstrosity if I ever saw one...
// const input = fs.readFileSync('./test_input.txt')
const input = fs.readFileSync('./input.txt')
    .toString()
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(e => e.replace(' -> ', ',')
        .split(',')
        .map(e => parseInt(e))
    );


// Make "board"
const x = Math.max(...input.map(x => {
    return [x[0], x[2]];
}).flat());

const y = Math.max(...input.map(y => {
    return [y[1], y[3]];
}).flat());

let board = Array.from(Array(y + 1), () => {
    return new Array(x + 1).fill(0);
});

// Logic
input.forEach(e => {
    let x = [e[0], e[2]];
    let y = [e[1], e[3]];

    if (x[0] === x[1]) {
        x = x[0];
        if (y[0] < y[1]) {
            for (let index = y[0]; index <= y[1]; index++) {
                board[index][x]++;
            }
        } else {
            for (let index = y[1]; index <= y[0]; index++) {
                board[index][x]++;
            }
        }
    }
    else if (y[0] === y[1]) {
        y = y[0];
        if (x[0] < x[1]) {
            for (let index = x[0]; index <= x[1]; index++) {
                board[y][index]++;
            }
        } else {
            for (let index = x[1]; index <= x[0]; index++) {
                board[y][index]++;
            }
        }
    }
});

console.log(board.flat().filter(e => e > 1).length);
