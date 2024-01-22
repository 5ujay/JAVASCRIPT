
let obj = [{
     name :"Sujay",
     age :20 ,
     city : "Mum.."
},
{
    name :"Arnold",
    age :25 ,
    city : "USA",
}]
console.log(obj);


let Object2= {};
Object2.name= "Cbum";
Object2.age =27;
Object2.city="USA";

console.log(Object2);

Object2.name = "Ronnie";
console.log(Object2);

let obj3 = {};

obj3.name = "Pepp";
obj3.age = 20;
obj3.city = "asdf";

console.log(obj3);

console.log(Object.values(obj3));
console.log(Object.keys(obj3));

console.log("========================");

let arr = [ {
    name: "sujay",
    age : 20,
    city : "Mumbai"
},{
    name :"prashnat",
    age: 21,
    city: "cali"
},{
    name : "Ashish",
    age : 20, 
    city : "NA"
}]

console.log(arr[0].name);