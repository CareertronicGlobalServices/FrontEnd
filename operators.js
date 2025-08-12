// // // let a = 5;
// // // let b = 5;
// // // let c = "5";
// // // console.log(a == c); //ye strict check nahi krra -value check karr but not data type
// // // console.log(a === c); //strict checking- value + data type hceck
// // // //Conditional Statement if-else
// // // if (a === c) {
// // //   console.log(`a = ${a} is greater than b= ${b}`);
// // // } else {
// // //   console.log(`a = ${a} is not greater than b= ${b}`);
// // // }
// // //-----------Create Marksheet----------
// // let math = 50;
// // let science = 80;
// // let eng = 50;
// // let hindi = 90;
// // let evs = 60;
// // let total = math + science + eng + hindi + evs;
// // let percent = (total / 500) * 100;
// // console.log(percent);
// // if (percent >= 90) {
// //   console.log("grade A+");
// // }
// // //And operator - if(condition){---statements}else {----statements}
// // else if (percent >= 80 && percent < 90) {
// //   console.log("grade A");
// // } else if (percent >= 70 && percent < 80) {
// //   console.log("grade B+");
// // } else if (percent >= 60 && percent < 70) {
// //   console.log("grade B");
// // } else if (percent >= 50 && percent < 60) {
// //   console.log("grade C");
// // } else {
// //   console.log("Fail");
// // }
// //Leap Year Concept
// let year = 1900;
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("not a leap year");
// }
//-----------Electricity Bill System

// let units = 500;
// let bill = 0;
// //first 50 units @3/-
// if (units <= 50) {
//   bill = units * 3;
// } else if (units > 50 && units <= 150) {
//   let newChargeUnits = units - 50;
//   let billabove50 = newChargeUnits * 5;
//   bill = 150 + billabove50;
// } else if (units > 150) {
//   let effectiveUnit = units - 150;
//   let billabove150 = effectiveUnit * 8;
//   bill = 150 + 500 + billabove150;
// }

// console.log(bill);
// if (bill >= 2000) {
//   let newbill = bill + (5 / 100) * bill;
//   console.log(newbill);
// }
