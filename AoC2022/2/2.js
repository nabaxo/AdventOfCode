const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e.split(' ').map(r => {
    if (r === 'A') {
        return 'rock';
    }
    if (r === 'B') {
        return 'paper';
    }
    if (r === 'C') {
        return 'scissors';
    }
    if (r === 'X') {
        return 'lose';
    }
    if (r === 'Y') {
        return 'draw';
    }
    if (r === 'Z') {
        return 'win';
    }
}));

const output = input.map(e => getScore(e[0], e[1])).reduce((a, c) => a + c);

console.log(output);


function getScore(a, b) {
    let score = 0;

    if (b === 'win') {
        score += 6;
        if (a === 'rock') {
            score += 2;
        } else if (a === 'paper') {
            score += 3;
        } else if (a === 'scissors') {
            score += 1;
        }
    } else if (b === 'draw') {
        score += 3;
        if (a === 'rock') {
            score += 1;
        } else if (a === 'paper') {
            score += 2;
        } else if (a === 'scissors') {
            score += 3;
        }
    } else {
        if (a === 'rock') {
            score += 3;
        } else if (a === 'paper') {
            score += 1;
        } else if (a === 'scissors') {
            score += 2;
        }
    }

    return score;
}
