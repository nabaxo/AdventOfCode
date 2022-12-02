const fs = require('fs');


let hPos = 0;
let vPos = 0;

let input = fs.readFileSync('./input.txt').toString();
input = input.replace(/\r\n/g, '\n').split('\n');


input.forEach(element => {
    const line = element.split(' ');
    if (line[0] === 'forward') {
        hPos += parseInt(line[1]);
    }
    else if (line[0] === 'up') {
        vPos -= parseInt(line[1]);
    }
    else if (line[0] === 'down') {
        vPos += parseInt(line[1]);
    }
});

console.log(hPos * vPos);
