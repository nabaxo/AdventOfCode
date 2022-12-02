const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e.split(''));
// const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split(''));

let output = [];
let corrupt = [];

for (let i = 0; i < input.length; i++) {
    let row = [...input[i]];
    let open = [];
    let close = [];
    let score = [];

    let j = 0;
    while (row.length > 0) {
        const instruction = row[0];
        row.shift();

        if (instruction === '(' ||
            instruction === '[' ||
            instruction === '{' ||
            instruction === '<') {
            open.push([j, instruction]);
        } else {
            close.push([j, instruction]);
        }
        j++;
    }

    row = [...input[i]];
    open = open.filter(e => e[0] < close[close.length - 1][0]).reverse();

    for (let j = 0; j < open.length; j++) {

        const [index, instruction] = open[j];
        let fi;

        switch (instruction) {
            case '(':
                fi = findNextIndex(index, ')', row);
                if (fi !== -1) {
                    open.splice(open.indexOf(open[j]), 1);
                    close = close.filter(e => e[0] !== fi);
                    row.splice(index, 1, 'x');
                    row.splice(fi, 1, 'x');
                    j--;
                }
                break;
            case '[':
                fi = findNextIndex(index, ']', row);
                if (fi !== -1) {
                    open.splice(open.indexOf(open[j]), 1);
                    close = close.filter(e => e[0] !== fi);
                    row.splice(index, 1, 'x');
                    row.splice(fi, 1, 'x');
                    j--;
                }
                break;
            case '{':
                fi = findNextIndex(index, '}', row);
                if (fi !== -1) {
                    open.splice(open.indexOf(open[j]), 1);
                    close = close.filter(e => e[0] !== fi);
                    row.splice(index, 1, 'x');
                    row.splice(fi, 1, 'x');
                    j--;
                }
                break;
            case '<':
                fi = findNextIndex(index, '>', row);
                if (fi !== -1) {
                    open.splice(open.indexOf(open[j]), 1);
                    close = close.filter(e => e[0] !== fi);
                    row.splice(index, 1, 'x');
                    row.splice(fi, 1, 'x');
                    j--;
                }
                break;
            default:
                break;
        }

        if (fi === -1 && (close.length && index < close[close.length - 1][0])) {
            let c = [];
            close.forEach(((e) => {
                if (e[0] >= index) {
                    c = close.splice(close.indexOf(e), 1)[0];
                }
            }));
            if (c) {
                corrupt.push(i);
            }
        }

    }
    if (!corrupt.includes(i)) {
        row.reverse().forEach(e => {
            if (e !== 'x') {
                score *= 5;
                score += flipper(e);
            }
        });
        output.push(score);
    }
}

function findNextIndex(index, char, arr) {
    for (let i = index; i < arr.length; i++) {
        const element = arr[i];
        if (element === char) {
            return i;
        }
    }
    return -1;
}

function flipper(instruction) {
    switch (instruction) {
        case '(':
            return 1;
        case '[':
            return 2;
        case '{':
            return 3;
        case '<':
            return 4;
        default:
            break;
    }
}

// console.table(input);

console.log({ 'score': output.sort((a, b) => a - b)[Math.floor(output.length / 2)] });
