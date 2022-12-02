const fs = require('fs');

// const draws = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];
const draws = [42, 32, 13, 22, 91, 2, 88, 85, 53, 87, 37, 33, 76, 98, 89, 19, 69, 9, 62, 21, 38, 49, 54, 81, 0, 26, 79, 36, 57, 18, 4, 40, 31, 80, 24, 64, 77, 97, 70, 6, 73, 23, 20, 47, 45, 51, 74, 25, 95, 96, 58, 92, 94, 11, 39, 63, 65, 99, 48, 83, 29, 34, 44, 75, 55, 17, 14, 56, 8, 82, 59, 52, 46, 90, 5, 41, 60, 67, 16, 1, 15, 61, 71, 66, 72, 30, 28, 3, 43, 27, 78, 10, 86, 7, 50, 35, 84, 12, 93, 68];

// Truly a monstrosity if I ever saw one...
let input = fs.readFileSync('./input.txt')
    .toString()
    .replace(/\r\n\r\n/g, '\n\n')
    .split('\n\n')
    .map(e => e.replace(/\r\n/g, '\n').split('\n'))
    .map(e => e.map(e => e.replace(/\s+/g, ' ')
        .split(' ')
        .filter(e => e)
        .map(e => parseInt(e))
    ));

let output;
let bingo = false;
let winningNumber;

for (let i = 0; i < draws.length; i++) {
    input.forEach((board) => {
        let b;
        b = board.filter(r => {
            return r.every(n => n === 'x');
        });

        for (let index = 0; index < board[0].length; index++) {
            const col = board.map(c => c[index]);
            if (col.every(n => n === 'x')) {
                b = col;
            }
        }

        if (b.length) {
            bingo = true;
            output = board;
            winningNumber = draws[i - 1];
        }
    });

    if (bingo) {
        break;
    } else {
        const num = draws[i];

        for (let j = 0; j < input.length; j++) {
            const board = input[j];

            for (let k = 0; k < board.length; k++) {
                const row = board[k];
                input[j][k] = row.map(n => n === num ? 'x' : n);
            }
        }
    }
}

output = output.flat().filter(e => e !== 'x').reduce((a, b) => a + b, 0) * winningNumber;

console.log(output);
