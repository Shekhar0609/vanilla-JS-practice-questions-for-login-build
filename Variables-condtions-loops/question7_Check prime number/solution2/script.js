let num = [];

for (i = 1; i <= 100; i++) {
  num.push(i);
}

let primeArray=[]
for (let j = 0; j < num.length; j++) {
  let currentNum = num[j];
  let isPrime = true;

  if (currentNum <= 1) {
    isPrime = false;
  } else {
    for (i = 2; i < currentNum; i++) {
      if (currentNum % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    primeArray.push(currentNum)
  }
}

console.log(primeArray)
