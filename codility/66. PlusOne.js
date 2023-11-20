var plusOne = function (digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        let currentDigit = digits[i]

        if (currentDigit < 9) {
            currentDigit++
            return digits
        } else {
            currentDigit = 0
        }
    }
    digits.unshift(1)
    console.log(digits);
    console.log('asas');

};

plusOne([1, 2, 9])