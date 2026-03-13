let num=Number(prompt("please enter number"))
let isPrime=true

if(num<=1){
isPrime=false;
} else {
for (i=2; i<num; i++){
if(num%i===0){
isPrime=false
break
}
}
}

if (isPrime) {
console.log(num + " Prime number")
} else {
console.log(num + " NOT Prime number")
}