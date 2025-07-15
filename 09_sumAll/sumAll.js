const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum === 'number' && firstNum > 0 && Number.isInteger(firstNum) && 
        typeof secondNum === 'number' && secondNum > 0 && Number.isInteger(secondNum)) {
        let sum = 0;
        if (firstNum > secondNum) {
            let acc = secondNum;
            for (let i = 0; i < (firstNum - secondNum + 1); i++){
                sum+=acc;
                acc+=1;
            }
        } else {
            let acc = firstNum;
            for (let i = 0; i < (secondNum - firstNum + 1); i++){
                sum+=acc;
                acc+=1;
            }
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
