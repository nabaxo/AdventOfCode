const fs = require('fs');

// const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split('')).map(e => e.map(n => parseInt(n)));
const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e.split('')).map(e => e.map(n => parseInt(n)));

let output = 1;
let basins = [];

for (let i = 0; i < input.length; i++) {
    const row = input[i];

    for (let j = 0; j < row.length; j++) {
        const element = input[i][j];
        let n, s, w, e;
        let basin = [];

        // find low point
        // (another monstrosity)
        {
            try {
                n = input[i - 1][j];
            } catch (e) { }
            try {
                s = input[i + 1][j];
            } catch (e) { }
            try {
                w = input[i][j - 1];
            } catch (e) { }
            try {
                e = input[i][j + 1];
            } catch (e) { }

            if ((element < n) &&
                (element < e) &&
                (element < s) &&
                (element < w)) {
                basin.push([i, j]);;
            }

            if (n === undefined) {
                if ((element < e) &&
                    (element < s) &&
                    (element < w)) {
                    basin.push([i, j]);;
                }
            }
            if (e === undefined) {
                if ((element < n) &&
                    (element < s) &&
                    (element < w)) {
                    basin.push([i, j]);;
                }
            }
            if (s === undefined) {
                if ((element < n) &&
                    (element < e) &&
                    (element < w)) {
                    basin.push([i, j]);;
                }
            }
            if (w === undefined) {
                if ((element < n) &&
                    (element < s) &&
                    (element < e)) {
                    basin.push([i, j]);;
                }
            }
            if (n === undefined && w === undefined) {
                if ((element < e) &&
                    (element < s)) {
                    basin.push([i, j]);;
                }
            }
            if (n === undefined && e === undefined) {
                if ((element < w) &&
                    (element < s)) {
                    basin.push([i, j]);;
                }
            }
            if (s === undefined && w === undefined) {
                if ((element < e) &&
                    (element < n)) {
                    basin.push([i, j]);;
                }
            }
            if (s === undefined && e === undefined) {
                if ((element < n) &&
                    (element < w)) {
                    basin.push([i, j]);;
                }
            }
        }


        if (basin.length) {
            let previous = basin.length;
            basin = expander(basin, i, j);
            let next = basin.length;

            while (previous !== next) {
                basin.forEach(e => {
                    basin = expander(basin, e[0], e[1]);
                });
                next = previous;
                previous = basin.length;
            }

            basins.push(basin.length);
        }
    }
}

function expander(arr, i, j) {
    try {
        if (input[i][j + 1] < 9) {
            arr.push([i, j + 1]);
        }
    } catch (error) { }

    try {
        if (input[i][j - 1] < 9) {
            arr.push([i, j - 1]);
        }
    } catch (error) { }

    try {
        if (input[i + 1][j] < 9) {
            arr.push([i + 1, j]);
        }
    } catch (error) { }

    try {
        if (input[i - 1][j] < 9) {
            arr.push([i - 1, j]);
        }
    } catch (error) { }

    return Array.from((new Map(arr.map((item) => [item.join(), item]))).values());

}


basins.sort((a, b) => b - a);

for (let index = 0; index < 3; index++) {
    const element = basins[index];
    output *= element;
}

// console.table(input);
console.log(output);
