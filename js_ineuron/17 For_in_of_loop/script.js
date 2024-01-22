// for in

let obj={name :"sujay" , course:"B.E" , University:"Mumbai"};
console.log(obj);

for(let x in obj){
    console.log(x, ":",obj [x]);
}

// for of

// for of not support object
// let obj1={name :"sujay" , course:"B.E" , University:"Mumbai"};
// console.log(obj);

// for(let x of obj1){
//     console.log(x, ":",obj [x]);
// }

let arr = [1,3,54,6565,5653,543543,5]; 
for(let x of arr){
    console.log(x);
}

let str = "hello buddy"; 
for(let x of str){
    console.log(x);
}

console.log("===============");

 
for(let x in str){
    console.log(x, str[x]);
}

let p=[1,2,3];
console.log(p);