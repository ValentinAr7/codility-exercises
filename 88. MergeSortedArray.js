var merge = function (nums1, m, nums2, n) {

    nums1.splice(m)

    for (let i = 0; i < nums2.length; i++) {
        let currentNum = nums2[i]
        nums1.push(currentNum)
    }

    nums1.sort((a, b) => {
        return a - b
    })
    return nums1
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) 