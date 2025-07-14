const repeatString = function(string, num) {
    var repeatedString = "";
    if (num < 0) {
        repeatedString = "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            repeatedString = repeatedString + string;
        }
    }   
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
