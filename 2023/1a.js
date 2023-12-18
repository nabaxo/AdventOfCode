const file = Bun.file('./1.input.txt');
// const file = Bun.file('./input.txt');

const string = await file.text();
const input = string.split(/\r\n/g);
input.pop(); // There if you can't be bothered to not remove last line, might break shit though

console.log(input);

const result = input.reduce((acc, cur) => {
  let n = cur.match(/\d|\.|\-/g).join('');
  n = parseInt(n.at(0) + n.at(-1));
  return acc + n;
}, 0);

console.log(result);
