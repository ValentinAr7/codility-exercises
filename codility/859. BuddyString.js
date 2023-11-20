var buddyStrings = function (s, goal) {

    sArr = []
    goalArr = []
    let buddyStr = true

    if (s === goal) {
        let set = new Set(s.split(''));
        return set.size < s.length;
    }

    if (s.length !== goal.length) return false

    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i]
        let secondLoopLetter = goal[i]

        if (currentLetter != secondLoopLetter) {
            sArr.push(currentLetter)
            goalArr.push(secondLoopLetter)
        }
    }

    if (sArr[0] === goalArr[1] && sArr[1] === goalArr[0] && sArr.length === 2) {
        return buddyStr
    } else {
        return false
    }
};

buddyStrings("abcd", "badc")