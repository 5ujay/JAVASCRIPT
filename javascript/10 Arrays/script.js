let f=[];
// console.log(arr);

f[0]="Banana";
f[1]="Apple";
f[2]="Orange";
console.log(f);

f=["Banana" , "Apple" , "Orange"];
console.log(f);
console.log(f[1]);

// console.clear();

console.log("========================");

let x = f[1];
console.log(x);

f[1]="Kivi";
f[3]="Per";
console.log(f);

console.log(f.length);

console.log(f.sort());

console.log("========================");


let p = [1,9,8,7,6,5,4,3,2];

console.log(p);
console.log(p.sort());
console.log(p.length);
console.log(p[p.length -1]);

p.push(10,11,12)
console.log(p);


p.pop();
console.log(p);
 
p.pop();
console.log(p);

console.log("========================");


let s = ["don" , "jon", 455 , 355];
console.log(s);

console.log(s.splice(1,0,"Shon" ));
// this how we add elemt in between array
//  1: space where elent want to add
//  0: no of element want to delete
//  "... " : what you want to add
console.log(s);
