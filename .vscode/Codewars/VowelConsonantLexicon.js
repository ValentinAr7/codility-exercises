const numbers = [1, 2, 3, 4, 5];

let accumulator = 5
const sum = numbers.reduce((accumulator, curr) => accumulator + curr, 0);
console.log(sum); // 15