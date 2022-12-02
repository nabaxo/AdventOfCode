import input from './3.input.js';

const testInput = [
    ['.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.',],
    ['#', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.',],
    ['.', '#', '.', '.', '.', '.', '#', '.', '.', '#', '.',],
    ['.', '.', '#', '.', '#', '.', '.', '.', '#', '.', '#',],
    ['.', '#', '.', '.', '.', '#', '#', '.', '.', '#', '.',],
    ['.', '.', '#', '.', '#', '#', '.', '.', '.', '.', '.',],
    ['.', '#', '.', '#', '.', '#', '.', '.', '.', '.', '#',],
    ['.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '#',],
    ['#', '.', '#', '#', '.', '.', '.', '#', '.', '.', '.',],
    ['#', '.', '.', '.', '#', '#', '.', '.', '.', '.', '#',],
    ['.', '#', '.', '.', '#', '.', '.', '.', '#', '.', '#',],
];


// Part 1
const trees = input.reduce((a, c, i) => {
    const right = i * 3 % c.length;
    if (c[right] === '#') {
        return a + 1;
    }
    else {
        return a;
    }
}, 0);

console.log(trees);


// Part 2
const checkMatrix = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];

const allRoutes = checkMatrix.reduce((acc, cur, ind) => {
    // let right = 0;
    const trees = input.reduce((a, c, i) => {
        const down = cur[1] * i;
        const right = i * cur[0] % c.length;
        if (c[right] === '#') {
            return a + 1;
        }
        else {
            return a;
        }
    }, 0);

    console.log({ trees });
    if (ind === 0) {
        return trees;
    } else {
        return acc * trees;
    }

}, 0);


console.log(allRoutes);
