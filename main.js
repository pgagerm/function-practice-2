//Function Practice #2



//1.

// var myObj = {
// 	name: 'Luisa',
// 	age: 25
// };

// var getName = function(key) {
// 	console.log(key.name);
// };

// getName(myObj);



//2.


// var myArray = ['javascript', 'is', 'awesome'];
// var anotherArray = ['what', 'happened', 'to', 'my', 'function'];

// var totalLetters = function(arg) {
// 	var allChar = arg.reduce(function(total, item) {
// 		return total + item.length;
// 	}, 0);
// 	return allChar;
// };

// console.log(totalLetters(myArray));
// console.log(totalLetters(anotherArray));



//3.

var keyValue = function(arg1, arg2) {
	var obj = {};
	arg1.push(obj);
};

console.log(keyValue('city', 'Denver'));

