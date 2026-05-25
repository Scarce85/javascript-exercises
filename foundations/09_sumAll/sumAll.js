const sumAll = function (min, max) {
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    else if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }

    return ((max - min) + 1) * (min + max) / 2;
};

// Do not edit below this line
module.exports = sumAll;
