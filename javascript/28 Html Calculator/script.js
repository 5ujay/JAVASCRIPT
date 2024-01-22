var num1 =Number(document.getElementById("one").innerText);
console.log(num1);

var num2 =Number(document.getElementById("two").innerText);
console.log(num2);

var op = document.getElementById("add").innerText;
console.log(op);

// we build function to get it easier ;
// we no need to write the conditions for this ;

const res=(a,b,op)=>{
    if(op === "Addition") return a+b;
    if(op ==="Substraction") return a-b;
    if(op ==="Multiplication") return a*b;
    if(op ==="division") return a/b;
}

var result = res(num1,num2 ,op);

document.getElementById("result").innerText = `Result for ${op} is  ${result}`;
