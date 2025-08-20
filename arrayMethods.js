let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

//Array method 1 push
// a.push(11); //1. add to the last of the array 2. returns the same updated array
// console.log(a);

// //Array method 2 pop
// a.pop();
// console.log(a);

// let c = [];
// c.pop();
// console.log(c); // return empty array

// //Array method 3 length -it returns the length of the array

// console.log(a.length);
//Array method 4 unshift()
// a.unshift(78); //1.adding the element at the start of an array 2.returns the same updated array
// console.log(a);
// //method 5 shift()
// a.shift();
// console.log(a);
// //method 6 : includes

// let y = a.includes(52); // 1. checks if the element is present in the array 2.returm=ns the boolean value -true/false
// console.log(a, y);

// //method 7: indexOf //gives the index no. of the element in th e array
// let z = a.indexOf(8);
// console.log(z);

//method 8: Slice
// console.log(a); //original array
// let k = a.slice(2, 6); //slice out the mid
// console.log(k); //new array of the sliced elements
// console.log(a); //does not update the original array

//method 9: Splice
console.log(a); //original array
let k = a.splice(2, 1); //starting index , kitne element udane hai
console.log(k); //new array of the spliced elements
console.log(a); //manipulation of  the original array
