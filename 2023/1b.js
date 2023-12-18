// const file = Bun.file('./1.test.input.txt');
const file = Bun.file('./1.input.txt');

const string = await file.text();
const input = string.split(/\r\n/g);
input.pop(); // There if you can't be bothered to not remove last line, might break shit though

// console.log(input);

const pattern = /[0-9]|(zero|one|two|three|four|five|six|seven|eight|nine)/g;
const numberMap = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
};

const result = input.reduce((acc, cur) => {
  if (cur !== undefined) {
    const n = matchOverlap(cur, pattern);
    let a, b;
    if (!isNaN(parseInt(n.at(0)))) {
      a = parseInt(n.at(0));
    } else if (n.at(0)) {
      a = numberMap[n.at(0)];
    }
    if (!isNaN(parseInt(n.at(-1)))) {
      b = parseInt(n.at(-1));
    } else if (n.at(-1)) {
      b = numberMap[n.at(-1)];
    }

    const r = parseInt('' + a + b);
    // console.log(r);
    return acc + r;
  }
}, 0);

console.log({ result });

// * Thanks StackOverflow!
function matchOverlap(input, re) {
  let r = [], m;
  // Prevent infinite loops
  if (!re.global) re = new RegExp(
    re.source, (re + '').split('/').pop() + 'g'
  );
  while (m = re.exec(input)) {
    re.lastIndex -= m[0].length - 1;
    r.push(m[0]);
  }
  return r;
}
