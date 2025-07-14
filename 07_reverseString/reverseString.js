const reverseString = function(string) {
    var reversedArray = [];
    for (let i = 0; i < string.length; i++) {
        reversedArray.push(string.charAt(string.length-i-1));
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
