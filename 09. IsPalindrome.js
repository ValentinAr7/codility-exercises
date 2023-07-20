var isPalindrome = function (x) {

    let palindrome = false
    let str = x.toString()
    let reversedInt = str.split('').reverse().join('');


    x == reversedInt ? palindrome = true : palindrome = false
    console.log(palindrome);
};

isPalindrome(1221)