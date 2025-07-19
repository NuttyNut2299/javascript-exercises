const currentYear = new Date().getFullYear();

function getAge (people) {
    if (people.yearOfDeath === undefined) {
        return currentYear - people.yearOfBirth;
    } else {
        return people.yearOfDeath - people.yearOfBirth;
    }
}

const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        if (getAge(oldest) > getAge(current)) {
            return oldest;
        } else {
            return current;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
