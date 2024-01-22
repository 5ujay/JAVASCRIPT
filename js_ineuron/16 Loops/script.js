// for loop

for(let i=1; i<=5; i++){
    console.log(i);
}

let n=5;
let string="";
for(let i=1 ; i<=n; i++){
    for(let j=1; j<=n ; j++){
        string +="";
    }
for(let k=0; k<i;k++){
    string +="*"
}
console.log(string);
}

// nested loop
// for loop inside for loop

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3 ; j++) {
//         console.log(j);
//          }
//    console.log(i); 
// }
console.log("beak and continue");
// break and continue

for(let i=0; i<=8 ; i++){
    if (i==6) continue; 
    console.log(i);
}

console.log("========== for loop on array =============");

let arr = [8,6,5,45,66,33,50,0,6];
console.log(arr);
for (let i = 0; i <= 5; i++) {
    // if (i == 1) continue;
    console.log(arr[i]);
    
}

console.log("========== for loop on object =============");

let obj = {name :"sujay" , age: "19"};
console.log(Object.keys(obj));
var keys = Object.keys(obj);
let temp;
for(let i=0 ; i<keys.length ; i++){
    // console.log(keys[i]);
    temp=keys[i];
    console.log(obj[temp]);
}