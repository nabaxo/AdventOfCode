const fs = require('fs');

// const input = fs.readFileSync('./test-input.txt').toString().split(/\n/g);
const input = fs.readFileSync('./input.txt').toString().split(/\n/g);
input.pop();

const a = []
const b = []

input.map(e => {
  const row = e.split(/[ \t]+/g)

  a.push(parseInt(row[0]))
  b.push(parseInt(row[1]))
})

a.sort()
b.sort()

// Part 1
const result1 = a.map((e, i) => {
  return Math.abs(e - b[i])
}).reduce((a, c) => a + c)

console.log(result1)

// Part 2
const counts = b.reduce((acc, cur) => {
  return acc[cur] ? ++acc[cur] : acc[cur] = 1, acc
}, {})

const result2 = a.map(e => {
  const count = counts[e.toString()] || 0
  const r = e * count

  return r
}).reduce((a, c) => a + c)

console.log(result2)
