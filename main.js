//Function Practice #2



//1.  	Write a function called 'getName' which takes a single object argument 
		// and returns the value of the 'name' property of the given object.

// var myObj = {
// 	name: 'Luisa',
// 	age: 25
// };

// var getName = function(key) {
// 	console.log(key.name);
// };

// getName(myObj);



//2.  	Write a function called 'totalLetters' which takes an array of strings
		// and returns the total number of letters in all strings.

// var myArray = ['javascript', 'is', 'awesome'];
// var anotherArray = ['what', 'happened', 'to', 'my', 'function'];

// var totalLetters = function(arg) {
// 	var newArray = arg.join("");
// 	return newArray.length;
// };

// console.log(totalLetters(myArray));
// console.log(totalLetters(anotherArray));



//3.  	Write a function called 'keyValue' which takes two arguments and returns 
		// an object with a key of the first argument and the value of the second argument.

// var myObj = {};

// var keyValue = function(arg1, arg2) {
// 	myObj[arg1] = arg2;
// 	return myObj;
// };

// console.log(keyValue('city', 'Denver'));



//4.  	Write a function called 'negativeIndex' which takes an array and a negative 
		// number, and returns the value from the array at the given negative index, as if 
		// the array was circular, i.e. arr.length+num.

// var myArray = ['a', 'b', 'c', 'd', 'e'];
// var myArray2 = ['jerry', 'sarah', 'sally'];

// var negativeIndex = function(arr, negnum) {
// 	var convert = Math.abs(negnum);
// 	var index =  arr.length - convert;
// 	return arr[index];
// };

// console.log(negativeIndex(myArray, -2));
// console.log(negativeIndex(myArray2, -1));



//5.  	Write a function called 'removeM' which takes a single string argument and 
		//removes all 'm' characters from the string. The function should return the 
		//new string.

// var removeM = function(str) {
// 	return str.replace(/m/g, '');
// };

// console.log(removeM('family'));
// console.log(removeM('memory'));



//6.  	Write a function called 'printObject' which takes a single object argument and 
		// console.log's each key-value pair in the format key is value on separate lines.

// var myObj = {
// 	a: 10,
// 	b: 20,
// 	c: 30
// };

// var printObject = function(arg) {
// 	for(var key in arg) {
// 		console.log(key + " is " + arg[key]);
// 	}
// };

// printObject(myObj);



//7.  	Write a function called 'vowels' which takes a string and returns an array of 
		// all the vowels in the string, including duplicates.

// var vowels = function(str) {
// 	console.log(str.match(/[aeiou]/gi));
// };

// vowels('alabama');
// vowels('What lets in youth?');



//8.  	Write a function called 'twins' which takes an array and returns true if every 
		// pair of items in the array is the same.

// var myArray1 = ['a', 'a', 'b', 'b', 'c', 'c'];
// var myArray2 = ['a', 'a', 'b', 'z'];
// var myArray3 = ['a', 'a', 'b'];
// var myArray4 = ['a', 'a', 'b', undefined];

// var twins = function(arr) {

// 	var status = false;  //sets the status of the function to false first

// 	for(var i = 0; i < arr.length; i+=2) {
// 		if(arr[i] === arr[i + 1]) {
// 			status = true;
// 		} else {
// 			status = false;
// 			console.log(false);
// 		}
// 	}

// 	if (status) {
// 		console.log(true);
// 	}
// };

// twins(myArray1);
// twins(myArray2);
// twins(myArray3);
// twins(myArray4);



//9.	Write a function called 'or' which takes an array of booleans and returns true 
		//if any one of them is true. Given an empty array, return false. If you find 
		//an item that is true, the function should return true immediately and not 
		//continue checking further values.

var myArray1 = [false, false, true, false];
var myArray2 = [false, false, false];
var myArray3 = [];

// var or = function(arg) {
// 	var newOr = arg.some(function() {
// 		if(newOr === true) {
// 			return true;
// 		}
// 	});
// };

// console.log(or(myArray1));

var or = myArray3.some(function(arg) {
	if(arg === true) {
		console.log("Got here");
		return true;
	}
});

console.log("The array is " + or );



//10.   Write a function called 'unique' which takes an array of strings, and returns a 
		//new array consisting of the unique values (no duplicates).


// var items1 = ['a', 'b', 'a', 'c', 'd', 'd'];
// var items2 = ['todd', 'avery', 'maria', 'avery'];

// console.log('_uniq: ', _.uniq(items1));
// console.log('_uniq: ', _.uniq(items2));

