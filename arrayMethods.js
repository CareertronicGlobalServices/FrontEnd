// let a = [1, 2, 3, 4, 5];
// let b = [6, 7, 8, 9, 10];

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
// console.log(a); //original array
// let k = a.splice(2, 1); //starting index , kitne element udane hai
// console.log(k); //new array of the spliced elements
// console.log(a); //manipulation of  the original array

// array methods
// let a = ["Shubham ", "Gulshan", "Lavish"];
// let b = ["Sonam ", "Shreyansh", "Aditya"];
// let c =a.push(b);
// console.log(c);
//Concat
// let c = a.concat(b);
// console.log(c);

//-flat
let a = [1, 3, 2, 4, 5, [1, [4, 5, [1, 2, 4]]]];
let b = [1, 2, 3];
let c = [4, 5, 6];
//let kd =  (...b); //concat /b...
console.log(...b);

// let b = a.flat(Infinity); // flat takes the input as depth
// console.log(a);
// console.log(b);
// //check the syntsx
// console.log(Array.isArray(b)); // true /false
// console.log(typeof Array); //constructor function
// //make an array from string
// let c = Array.from("89"); //String
// console.log(c);

// let d = Array.of("Sonam ", "Shubham ", "Gulshan");
// console.log(d);
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
arr1.forEach((element) => {
  console.log(element + 4);
});
