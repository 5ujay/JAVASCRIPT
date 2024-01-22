// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Message get executed");
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("Promise completed resolved")
// })


// new Promise(
//     function (resolve, reject) {
//         setTimeout(function () {
//             console.log("promise two excuted");
//             resolve()
//         }, 2000)
//     }
// ).then(function () {
//     console.log("promise two resolved");
// })


// const PromiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({
//             userName: "sujay", email: "sujaypagam@gmail.com"
//         })
//     }, 1000)
// })

// PromiseThree.then(function (user) {
//     console.log(user)
// })

// const PromiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ userName: "ABCD", password: "1234" })
//         } else {
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)
// })


// PromiseFour
//     .then((user) => {
//         console.log(user);
//         return user.userName;
//     })
//     .then((userName) => {
//         console.log(userName);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ userName: "Javascript", password: "12345678" })
//         } else {
//             reject("ERROR: JS went Wrong!")
//         }
//     }, 1000)
// })

// async function comsumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }

// async function comsumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }

// comsumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://randomuser.me/api/")
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E :", error);
//     }
// }
// getAllUsers()

fetch("https://randomuser.me/api/")
    .then(function (response) {
        return response.json()
    }
    )
    .then(function (data) {
        console.log(data);
    })
    .catch((error) => console.log(error))