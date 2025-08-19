// //loop

// //while loop

// let i = 5;

// // //while(condition){ ----statements to run}
// // while (i <= 10) {
// //   console.log(`i =${i}`);
// //   i++; //(i=i+1)
// // }
// // console.log(`I am out of the loop ${i}`);
// //Reminder - %
// //decimal remove karne k liye - Math.floor

// let num = 879546879;
// let maxdig = 0;
// while (num > 0) {
//   let dig = num % 10;
//   //console.log(dig);
//   if (dig > maxdig) {
//     maxdig = dig;
//   }
//   //need to check one condition

//   //yah pr number ko update karna padega // last number remove hua hai
//   num = Math.floor(num / 10);
//   //console.log(num);
//   // console.log(maxdig);
// }
// console.log(maxdig);

//Prime
let num = 25;
let isPrime = true; //willMath store if num is prime /not prime

if (num <= 1) {
  console.log("no. iseither 0 or 1 and hence is not prime");
  isPrime = false;
}
//console.log(Math.floor(Math.sqrt(num)));
let sqrt = Math.floor(Math.sqrt(num));
//console.log(sqrt);
let i = 2;
while (i <= sqrt) {
  console.log(i);
  if (num % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}

if (isPrime === true) {
  console.log(`number is prime`);
} else {
  console.log("number is not prime");
}
