const removeFromArray = function(array, ...numbers) {
    let newArray = [];
    for (const item of array) {
        if (!numbers.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
