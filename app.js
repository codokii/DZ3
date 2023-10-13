var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var newArray = [];

for (var i = 0; i < array.length; i++) {
    var number = array[i];
    var firstNum = Number(number.toString()[0]);

    if (firstNum === 2 || firstNum === 5) {
        newArray.push(number);
    }
}
console.log(newArray);





var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var newTags = {};
tags.forEach(tag => {
    if (newTags[tag]) {
        newTags[tag] += 1;
    } else {
        newTags[tag] = 1;
    }
});
console.log(newTags);