const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total,current) => 
    total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total,current) => 
    total * current, 1);
};

const power = function(num,power) {
	let result = 1;
  let i = 0;
  while (i < power) {
    result *= num;
    i++;
  }
  return result;
};

const factorial = function(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
