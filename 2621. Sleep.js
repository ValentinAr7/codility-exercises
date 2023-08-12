function sleep(millis) {
  return new Promise((resolve) => setTimeout(() => resolve(millis), millis));
}

let t = Date.now();

sleep(100).then((delayTime) => {
  console.log(`Slept for ${Date.now() - t} milliseconds`); // Should print a value close to 100
  console.log(`Resolved value: ${delayTime}`); // 100
});
