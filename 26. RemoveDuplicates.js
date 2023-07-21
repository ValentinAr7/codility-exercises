var removeDuplicates = function (nums) {

    let uniqueValues = new Set(nums)
    nums.length = 0
    nums.push(...uniqueValues.values())
    return uniqueValues.size
};

removeDuplicates([1, 1, 2])