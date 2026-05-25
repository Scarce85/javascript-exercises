const repeatString = function (string, num) {
    let result = "";
    if (num < 0) {
        return "ERROR";
    }
    else if (typeof num === 'number' && !isNaN(num)) {
        for (let i = 0; i < num; i++) {
            result += string;
        }
        return result;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
