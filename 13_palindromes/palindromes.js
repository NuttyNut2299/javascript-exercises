const palindromes = function (string) {
    const filteredLowerCase = string.toLowerCase()
                                    .split('')
                                    .filter(char => char !== ' ' && char !== '!' && char !== ',' && char !== '.')
                                    .join('');

    const reversedString = filteredLowerCase.split('')
                                            .reverse()
                                            .join('');

    if (reversedString === filteredLowerCase) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
