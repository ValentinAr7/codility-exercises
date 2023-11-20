var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    let result = nums[Math.floor(nums.length / 2)];
    //order items ad divide by 2. The middle index will be the one that is majority
    console.log(result);
};

majorityElement([2, 2, 1, 1, 1, 2, 2])