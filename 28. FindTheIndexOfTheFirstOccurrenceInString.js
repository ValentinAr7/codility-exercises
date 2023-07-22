var strStr = function (haystack, needle) {

    if (haystack.includes(needle)) {
        let index = haystack.indexOf(needle)
        return index
    } else {
        return -1
    }
};

strStr('sasdsadbutsad', 'sad')