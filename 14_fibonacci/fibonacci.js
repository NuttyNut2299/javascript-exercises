const fibonacci = function(arg) {
    if (typeof arg !== 'number') {
        arg = parseInt(arg);
    }

    if (arg < 0) {
        return 'OOPS'; 
    } 

    let first = 0;
    let second = 1;

    if (arg === 0) {
        return first;
    } else if (arg ===1) {
        return second;
    } else {
        let current = 0 ;
        for (let i = 0; i < arg  - 1; i++) {
            current = first + second; 
            first = second;
            second = current;
        }
        return current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
