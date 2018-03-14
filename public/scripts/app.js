'use strict';

// arguments object - no longer bound with arrow function, use ES5 function

var add = function add(a, b) {
	// console.log(arguments);
	return a + b;
};
console.log(add(55, 1));

// this keyword no longer bound with arrow function

var user = {
	name: 'Jona',
	cities: ['Lawrence', 'Queens', 'West Hartford'],
	// printPlacesLived: function () {
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});
	}
};

console.log(user.printPlacesLived());

// Challenge Area


var multiplier = {
	// numbers - array of numbers
	// multiplyBy - single number
	// multiply = return a new array where numbers have been multiplied
	numbers: [1, 2, 3],
	multiplyBy: 4,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (number) {
			return number * _this2.multiplyBy;
		});
	}
};

console.log(multiplier.multiply());
