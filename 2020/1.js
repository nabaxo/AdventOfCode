import input from './1.input.js';

/*
for (const a of input) {
    for (const b of input) {
        if (a + b === 2020) {
            console.log(a * b);
            break;
        }
    }
} */

for (const a of input) {
    for (const b of input) {
        for (const c of input) {
            if (a + b + c === 2020) {
                console.log(a * b * c);
                break;
            }
        }
    }
}
