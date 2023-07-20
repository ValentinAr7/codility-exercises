var containsDuplicate = function (nums) {

    let distinctArr = []
    let distinct = true

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]

        if (!distinctArr.includes(currentNum)) {
            distinctArr.push(currentNum)
        }
    }

    nums.length != distinctArr.length ? distinct = true : distinct = false
    console.log(distinct)
};

containsDuplicate([1, 2, 3, 1])