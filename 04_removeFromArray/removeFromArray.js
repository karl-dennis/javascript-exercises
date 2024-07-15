const removeFromArray = function(array, ...nums) {
    return array.filter(val => !nums.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
