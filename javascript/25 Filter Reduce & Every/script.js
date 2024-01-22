let arr=[1,2,3,4,5,6,7,8];

let filtersA = arr.filter((item) =>
{
    return item > 3;

})

console.log(filtersA);

// =============================================//

let brr= [
    {name:"sujay" , points:20},
    {name:"raman" , points:19},
    {name:"sham" , points:18},
    {name:"sir" , points:17},
];

let filterB = brr.filter((selects) =>{
   return selects.points >= 19 ;
}
)

console.log(filterB);
// =============================================//

// Accumilted == storing /storage /ground
// Currindex == curr Value 
// it returns one element
var array = [10,10,10,10,10]
var reduce =  array.reduce ((accu , curr ) =>{
    return accu + curr;
});
console.log(reduce);

// every check it element and every element should stidfy the condition.

var everyc = array.every ( (Element)=>{
    return Element >1;
})
console.log(everyc);









