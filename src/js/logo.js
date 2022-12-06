const leftSpinner = new Spinner('.logo__left-slide');
const rightSpinner = new Spinner('.logo__right-slide');

setInterval(() => {
  rightSpinner.shift();

  if (rightSpinner.number - 2 === 0) {
    leftSpinner.shift();
  }
}, 2020)