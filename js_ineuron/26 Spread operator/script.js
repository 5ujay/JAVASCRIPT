var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];
var c = [...a, ...b];
// spread opertaor use 3 dots to show
a[0] = 10;  //change
b[0] = 20;  //change
console.log(a);
console.log(b);
console.log(c);


// challenge 
console.log("==================== challange ===================");


var cha = [
    { name: "ravik", amount: 2500, age: 20 },
    { name: "navik", amount: 2600, age: 30 },
    { name: "shavik", amount: 2700, age: 40 },
    { name: "mavik", amount: 2800, age: 50 },
];

var ful = cha.filter((obj) => {
    return obj.amount > 2600;
})

console.log(ful);

var name = ful.map((obj) => {
    return obj.name;
})
console.log(name);

var age = ful.map((obj) => {
    return obj.age;
})
console.log(age);

var name2 = cha.filter((obj) => {
    return obj.amount >= 2600;
}).map((obj) => obj.name);

console.log(name2);

var total = cha.reduce((accu, curr) => {
    return accu + curr.amount;
}, 0)  //imp zero written 

console.log(total);