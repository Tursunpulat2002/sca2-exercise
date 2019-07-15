const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
	return str.split(" ");
};

const reverse = str => {
	// TODO - write a function which reverses the string
	return str.split('').reverse().join('');
};

const uniqueOnes = arr => {
	// TODO - write a function which returns the inputted array without duplicate elements
	var sorted_arr = arr.slice().sort();
	var results = [];
	for (var i = 0; i <= sorted_arr.length - 1; i++) {
  	  if (sorted_arr[i + 1] != sorted_arr[i]) {
    	    results.push(sorted_arr[i]);
    	}
	}
	return results
};

const factorial = num => {
	// TODO - write a function which returns the factorial of a positive integer
	const arr1 = []
	for (let i = num; i > 0 ; i--) {
		 arr1.push(i);
	}
	p = 1
	for (let j = 0; j < arr1.length; j++) {
		p *= arr1[j];
	}
	return p
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
	// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
	const arr3 = []
	if (arr1.length != arr2.length){
		return -1
	}else{
		for (let i = 0; i < arr1.length; i++) {
			arr3.push([arr1[i], arr2[i]]);
		}
		return arr3
	}
};

const unzip = arr => {
	// TODO - Write a function which does the opposite of `zip()`
	
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
	// Example = shiftThree("Hello") === "lloHe"
	arr1 = str.split('');
	for (let i = 0; i < num; i++) {
		const l = arr1.shift();
		arr1.push(l);
	}
	newStr = arr1.join('')
	return newStr
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")

//console.log(tokenize('Hello how are you'));
//console.log(reverse('Hello how are you'));
//console.log(uniqueOnes([2,2,2,3,4,2,3,2,5,6,7,8,5,1,1]));
//console.log(factorial(6));
//console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip());
//console.log(shiftRight('Hello', 24));