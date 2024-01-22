// var eve= document.querySelector("h1");

// console.log(eve);

// eve.addEventListener("click" , 
// (e) => {
// //    (location.href="//google.com") 
// // add lots of things changing color and may others
// console.log(e)}
// );

// eve.onclick = ()=>(
//     console.log("clicked on click")
// );

// const print=()=>{
//     console.log("something Printed");
// }

// ================== //

var eve = document.querySelector("h1");

// function change(params) {
//    eve.style.color="white";
// }

// another method
function change(e) {
console.log(e);

if(e === "bg") eve.style.background ="pink";
else eve.style.color = "White";
    
}

// slections 


function select(params) {
    var selection= document.querySelector('select').value;
    console.log(selection);
}

function get(params) {
    var name = document.querySelector("input").value;
    console.log(name);
}

//newmouse learnings

function onm(params) {
    console.log("mouse on over!");

    var it= document.querySelector('h5');
    it.style.backgroundColor="pink";
}

function omt(params) {
    console.log("mouse on dowm!");

    var it= document.querySelector('h5');
    it.style.backgroundColor="orange";
}

// Time events in javascript
// timing of arriving

setTimeout( ()=>{console.log("Arrivr after time is complete")} , 5000);


