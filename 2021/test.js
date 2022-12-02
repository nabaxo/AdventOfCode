const fs = require('fs');

const input = fs.readFileSync('./test.txt')
    .toString()
    .split(/\n/g)
    .filter(e => !e.match(/=./g))
    .map(e => {
        e = e.replace('=', '');
        e = 'nvram unset ' + e;
        return e;
    });

// console.log(input);

try {
    fs.writeFileSync('./output.txt', input.join('\n'));
} catch (error) {
    console.log(error);
}
