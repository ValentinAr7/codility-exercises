function tidyNumber(n) {
  let string = n.toString();
  let arr = string.split("");

  let isTidy = true;

  if (isNaN(n)) {
    isTidy = false;
  }

  for (let i = 0; i <= arr.length; i++) {
    let currentNumber = arr[i];

    if (currentNumber > arr[i + 1]) {
      isTidy = false;
      break;
    }
  }

  return isTidy;
}

tidyNumber(362);
