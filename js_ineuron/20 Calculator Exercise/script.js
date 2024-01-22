function Calculator(a,b,type) {
    a=parseInt(a);
    b=parseInt(b);

    if(typeof a != Number) return"It is not a number";
    if(typeof b != Number) return"It is not a number";
    if(type === "Addition") return a+b;
    if(type === "Substraction") return a-b;
    
}


let a = 50;
let b = 5;

console.log(Calculator(a,b,"Addition"));
console.log(Calculator(a,b,"Substraction"));