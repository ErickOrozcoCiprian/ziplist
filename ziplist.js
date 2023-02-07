const _ = require("underscore");

function zipList(list1, list2) {
  let zippedList = [];
  let originalLength = list1.length;
  for (let i = 0; i < originalLength; i ++) {
    zippedList.push(list1.shift());
    zippedList.push(list2.shift());
  }
  return zippedList;
}

function zipListTheSimpleWay(list1, list2) {
return _.zip(list1, list2);
}

const list1 = [1, 2, 3, 4, 5, 6];
const list2 = [10, 11, 12, 13, 14, 15];
const list3 = [1, 2, 3, 4, 5, 6];
const list4 = [6, 9, 7, 8, 4, 5];

let zipped1 = zipList(list1, list2);
let zipped2 = zipListTheSimpleWay(list3, list4);

console.log(zipped1);
console.log(zipped2);
