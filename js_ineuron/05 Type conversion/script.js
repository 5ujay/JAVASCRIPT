// conversion types

let marks = 45;
console.log(marks , typeof marks);

marks= String(marks);
console.log(marks , typeof marks);

marks= (45).toString();
console.log(marks , typeof marks);

// first decide num then print it as a number after that 
// convert it into the string by using num = String(num)
// the again for converting it into the num use
// num = NUmber(num) and print or console it.
let num = 10;
console.log(num , typeof num);
num=String(num);
console.log(num , typeof num);
num = Number (num);
console.log(num , typeof num);

let num1 = "20";
let num2 = 20;

num1 = Number(num1); //this is for converting string into number
console.log(num1 + num2);