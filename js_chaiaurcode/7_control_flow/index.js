// if

if (true) {
    // console.log("executed");
}
// if condition true is then only code in this scope will executed

// == is use to check it is eqal or not ex. 2 == "2" //true
// but
// === is use to check it is equal or not as  well as condiotions of it ex. 2 === "2" //false

let a = 200;

if (a > 50) {
    const word = "yes";
    // console.log(`Answer is : ${word}`);
}
// console.log(`Answer is : ${word}`);
// block scope

if (a > 50) {
    var word = "yes";
    // console.log(`Answer is : ${word}`);
}
// console.log(`Answer is : ${word}`);