const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split(',').map(e => parseInt(e));
const input = fs.readFileSync('./input.txt').toString().split(',').map(e => parseInt(e));

let output = input;

for (let index = 0; index < 80; index++) {
    output.forEach((f, i) => {
        if (f !== 0) {
            output[i]--;
        } else {
            output[i] = 6;
            output.push(8);
        }
    });
}


console.log(output.length);
