const { sum } = require('..');

const [, , left, right] = process.argv;

// eslint-disable-next-line no-console
console.log(sum(Number(left), Number(right)));
