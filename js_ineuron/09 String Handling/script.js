// declaring string length
var txt ="This is JS Tutorials";
var len = txt.length;

console.log(len);

// cutting string
console.log(txt.slice(0,4));
console.log(txt.slice(-15,-10));

txt = "This is JS";
console.log(txt);
console.log(txt.replace("JS" , "HTML"));
console.log(txt.toLowerCase());
console.log(txt.toUpperCase());

let m = "111";
console.log(m.padStart ( 7 ,"0"));
console.log(m.padEnd(7,"p"));

sp="sujay pagam";
console.log(sp.charAt(4));
console.log(sp.charCodeAt(4));

// search in string
let text = "This is how we cam search in string";
console.log(text.indexOf("search"));
console.log(text.includes("is"));
console.log(text.includes("not"));
console.log(text.startsWith("This"));