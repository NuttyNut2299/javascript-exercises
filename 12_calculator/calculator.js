const add = function(numA, numB) {
	return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(array) {
  return array.reduce((total, current) => {
    if (current === undefined) {
      return total;
    } else {
      return total + current;
    }
    }, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => (total * current), 1)
};

const power = function(numA, numB) {
	return numA ** numB;
};

const factorial = function(num) {
  let result = 1
  if (num === 0) {
    return result;
  } else {
    for (let i = 1; i <= num; i++) {
      result*=i;
    }
    return result;
  }
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
