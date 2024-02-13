const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    } else if (number1 < 0 || number2 < 0) {
        return "ERROR";
    } else {
        let start = number1;
        let end = number2;
        if (number1 > number2) {
            start = number2;
            end = number1;
        }
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
