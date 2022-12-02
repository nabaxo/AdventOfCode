const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e.split(' ').map(r => {
    if (r === 'A' || r === 'X') {
        return 'rock';
    }
    if (r === 'B' || r === 'Y') {
        return 'paper';
    }
    if (r === 'C' || r === 'Z') {
        return 'scissors';
    }
}));

const output = input.map(e => getScore(e[0], e[1])).reduce((a, c) => a + c);

console.log(output);


function getScore(a, b) {
    let score = 0;

    if ((a === 'rock' && b === 'paper') || (a === 'paper' && b === 'scissors') || (a === 'scissors' && b === 'rock')) {
        score += 6;
    } else if (a === b) {
        score += 3;
    }

    if (b === 'rock') {
        score += 1;
    } else if (b === 'paper') {
        score += 2;
    } else if (b === 'scissors') {
        score += 3;
    }

    return score;
}
