let changeNumber = (n) => Number(String(n).split('').reverse().join(''));

module.exports = function reverse (n) {
   return n < 0 ? changeNumber(n * -1) : changeNumber(n);
}
