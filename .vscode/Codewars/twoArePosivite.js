function twoArePositive(a, b, c) {
  let nums = [...arguments].filter((i) => i > 0).length === 2;
  console.log(nums);
}

twoArePositive(2, 4, 8);
