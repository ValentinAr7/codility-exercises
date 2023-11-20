let add = function (x) {
  return function (y) {
    console.log(x + y)
  }
}

let addByTwo = add(2)
addByTwo(3)