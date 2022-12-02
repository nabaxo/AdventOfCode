// const input = [[1, 3, 'a', 'abcde'],
// [1, 3, 'b', 'cdefg'],
// [2, 9, 'c', 'ccccccccc']];

import input from './2.input.js';

/* // Part 1
const result = input.reduce((acc, cur) => {
    const occurrences = cur[3].split('').reduce((a, v) => {
        return v === cur[2] ? a + 1 : a;
    }, 0);

    if (cur[0] <= occurrences && occurrences <= cur[1]) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0);
*/

// Part 2
const result = input.reduce((acc, cur) => {
    const pass = cur[3].split('');

    if ((pass[cur[0] - 1] === cur[2]) !== (pass[cur[1] - 1] === cur[2])) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0);

console.log(result);
