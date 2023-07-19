var twoSum = function(nums, target) {
    
    let arrayOfIndexes = []

    for(let i = 0; i < nums.length; i++){
        let currentNumber = nums[i]

        for(let j = 1; j < nums.length; j++){
            let secondLoopNum = nums[j]

            if(currentNumber + secondLoopNum == target){
                arrayOfIndexes.push(i, j)
                i++
            }
        }
    }
    console.log(arrayOfIndexes);
    return arrayOfIndexes
};

twoSum([3, 3], 6)