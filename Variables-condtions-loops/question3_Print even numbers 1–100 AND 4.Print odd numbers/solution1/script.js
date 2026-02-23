let odd=[];
let even=[]

for (i=1; i<=100; i++) {
   if(i%2===0){
	odd.push(i)
   } else {
       even.push(i)
   }
}

console.log("odd number", odd);
console.log("even number", even);