function addLength(str) {
  let sep = str.split(" ");

  let newArr = [];

  for (let i = 0; i < sep.length; i++) {
    let element = sep[i];
    newArr.push(`${element} ${element.length}`);
  }

  return newArr;
}

addLength("apple ban");
