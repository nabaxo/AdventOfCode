const fs = require('fs');


let hPos = 0;
let depth = 0;
let aim = 0;

let input = fs.readFileSync('./input.txt').toString();
input = input.replace(/\r\n/g, '\n').split('\n');

input.forEach(element => {
    const line = element.split(' ');
    if (line[0] === 'forward') {
        hPos += parseInt(line[1]);
        depth = depth + aim * parseInt(line[1]);
    }
    else if (line[0] === 'up') {
        aim -= parseInt(line[1]);
    }
    else if (line[0] === 'down') {
        aim += parseInt(line[1]);
    }
});

console.log(hPos * depth);
