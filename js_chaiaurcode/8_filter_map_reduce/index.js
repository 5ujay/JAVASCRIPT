// const coding = ["java", "html", "css", "javascript", "react", "mogodb"]

// const langs = coding.forEach((item) => {
//     // return console.log(item);
// })

// // console.log(langs);


// // ===============================filter=================================== 

// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const NumFilterEx = Numbers.filter((num) => {
//     return num > 4;
// })

// // console.log(NumFilterEx);

// const NewNumbers = [];

// Numbers.forEach((num) => {
//     if (num > 4) {
//         NewNumbers.push(num)
//     }
// })

// // console.log(NewNumbers);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// // const BookList = books.filter((bk) => {
// //     return bk.genre === "History";
// // })

// const BookList = books.filter((bk) => {
//     return bk.publish >= 2000;
// })
// // console.log(BookList);

// =================================map==============================

// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const MapEx = Numbers.map((num) => {
// //     return num + 10;
// // }).map((num) => {
// //     return num - 10;
// // })

// const MapEx = Numbers.map((num) => {
//     return num + 10;
// }).map((num) => {
//     return num - 10;
// }).filter((num) => {
//     return num > 4;
// })


// // this called chaining of map filter

// console.log(MapEx);

// ================================Reduce================================

const Nums = [1, 2, 3, 4];

const MyTotal = Nums.reduce(function (accumulator, currentValue) {
    // console.log(`Accumulator ${accumulator}  Current Value ${currentValue}`);
    return accumulator + currentValue
}, 0)

// console.log(MyTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const couseToatl = shoppingCart.reduce((accu, item) => {
    return accu + item.price
}, 0)


console.log(couseToatl);