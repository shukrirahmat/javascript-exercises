const removeFromArray = function(array, ...toRemove) {

    const result = array.filter(n => !toRemove.includes(n));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
