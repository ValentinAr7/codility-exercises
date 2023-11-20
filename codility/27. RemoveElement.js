var removeElement = function (nums, val) {


    let filteredVals = nums.filter(num => num == val)

    for (let i = nums.length - 1; i >= 0; i--) {
        let currentNum = nums[i]

        if (currentNum == val) {
            let index = nums.indexOf(currentNum)
            let valNum = nums.splice(index, 1)
        }
    }

    let k = nums
    console.log(k);
    return k
};

removeElement([3, 2, 2, 3], 3)

