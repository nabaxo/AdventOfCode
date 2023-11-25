const file = Bun.file('./test_input.txt');
// const file = Bun.file('./input.txt');

const string = await file.text();
const input = string.split(/\r\n/g);
input.pop(); // There if you can't be bothered to not remove last line, might break shit though

console.log(input);
