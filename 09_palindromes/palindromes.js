const palindromes = function (word) {
    let array = word
        .toLowerCase()
        .split('')
        .filter((letter) => {
            let letterNumber = "abcdefghijklmnopqrstuvwxyz1234567890";
            const allowed = letterNumber.split("");
            return allowed.includes(letter);       
        });
    const original = array.join("");
    const reverse = array.reverse().join("");
    return original == reverse;

};

// Do not edit below this line
module.exports = palindromes;
