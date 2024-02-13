const reverseString = function(line) {
    let letters = [];
    line = line.toString();
    for (let i = 0; i < line.length; i++) {
        letters.unshift(line.charAt(i));
    }
    return letters.join("");
};

// Do not edit below this line
module.exports = reverseString;
