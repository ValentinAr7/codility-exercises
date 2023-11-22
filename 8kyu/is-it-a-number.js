var findAverage = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  let mean = sum / nums.length;

  return mean
};

findAverage([1, 3, 5, 7]);
