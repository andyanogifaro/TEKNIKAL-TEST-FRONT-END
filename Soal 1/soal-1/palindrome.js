function palimore(x) {
  let str = x.toString();
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(palimore(121));
console.log(palimore(122));
console.log(palimore(123));
