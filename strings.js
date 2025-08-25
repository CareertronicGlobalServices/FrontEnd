let Rname = "Shubham";
//console.log(typeof Rname);
let count = 50;
//console.log(Rname + count);
//Charat
//console.log(Rname.charAt(2));
//console.log(Rname.__proto__);

const gameName = new String("sonam-sp-com");
// console.log(gameName);
// console.log(typeof gameName);
// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 6);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);
console.log(gameName);
const newStringOne = "   Sonam    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "www.sonampanjwani%20.com";

console.log(url.replace("%20", "-"));

console.log(url.includes("com"));
let newname = "sonamKanchan";
console.log(newname.split("K"));
