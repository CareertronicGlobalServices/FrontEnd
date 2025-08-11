// let a = 5;
// console.log(typeof a);
//---------------------
// let b = "Shubham";
// console.log(typeof b);
// //type conversion and type coercion(jab JS khud datatype of convert karta hai )
// a = String("Sonam");
// console.log(typeof a);

//Imp Question why the typeof numm results in Object. Difference of khaliObj and null
//Null and undefined ki kahani
// let obj = {};
// console.log(obj, typeof obj);
// console.log(typeof null);
// //type of undefined
// console.log(typeof undefined); //undefined

//Type conversions
//  to number ("string" -> Number , "564ahdghs" ->NaN , true->1 , false->0 ,null->0 ,undefined ->Nan)
// let valueInNumber = Number(undefined);
// console.log(valueInNumber, typeof valueInNumber);
//NaN-not a number

//Type conversion to Strings
// let valueInString = String(undefined);
// console.log(valueInString, typeof valueInString);

//Similarly for type conversions to Boolean and String
//  to boolean ("string" -> true   , "564ahdghs" ->invalid/unexpected token , true->true , false->false ,null->false ,undefined ->false)
// let valueInBoolean = Number(undefined);
// console.log(valueInBoolean, typeof valueInBoolean);
//

// let valueInBoolean = Boolean(undefined);
// console.log(valueInBoolean, typeof valueInBoolean);

// //  to String ("string" -> strring   , "564ahdghs" ->saME string, true->true , false->false ,null->null ,undefined ->undefined)
// //
//Operators
//addind string and number
//strict checking(=== also checks the type of the variable)
//String Interpolation
let age = 30;
//console.log("My name is sonam and i am " + age + " years old");
console.log(` My name is Sonam and I am ${age} years old`);
