let num = [];

let i = 0;
while (i <= 100) {
  i++;
  num.push(i);
}

console.log(num);
let primeArray = [];
let j = 0;
while (j < num.length) {
  let currentNum = num[j];
  let isPrime = true;

  if (currentNum <= 1) {
    isPrime = false;
  } else {
    let k = 2;
    while (k < currentNum) {
      if (currentNum % k === 0) {
        isPrime = false;
        break;
      }
      k++;
    }
  }

  if (isPrime) {
    primeArray.push(currentNum);
  }
  j++;
}

console.log(primeArray);
