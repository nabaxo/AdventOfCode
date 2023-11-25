const fs = require('fs');

const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split(' '));

console.table(input);

function buildTree(arr) {

}
