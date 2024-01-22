// if else
if(10 < 9){
    console.log(true);
}else{
    console.log(false);
}

console.log("====================");

let a = 10;

if (a > 10) {
    console.log("Number is bigger");
}else if(a < 10){
    console.log("Number is samller");
}else{
    console.log("Number is equal to 10");
}

console.log("====================");

let b = 90;
let c = "Lucky"

if (b < 10 && c == "Lucky") {
    console.log("Number is bigger");
    console.log("you are lucky");
}else if ( b > 10 || c == "ucky"){
    console.log("one match");
}

console.log("====================");

// detect code by lang
// en=english
// fr=french
// mr=marathi
let code="en";

if(code == "en"){
    console.log("english");
}else if (code == "fr") {
    console.log("french");
}else if (code == "mr") {
    console.log("marathi");
}else{
    console.log("blank");
}

console.log("====================");

// greatest of thr3e num

let p = 10;
let q = 20;
let r = 30;

if(p > q && p > r ){
    console.log("p is greater");
}
else if(q > p && q > r ){
    console.log("q is greater");
}
else if(r > q && r > p ){
    console.log("r is greater");
}