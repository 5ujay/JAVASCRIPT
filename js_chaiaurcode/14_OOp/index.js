const user = {
    name: "sujay",
    age: 19,
    branch: "TEIOT",

    newFun: function () {
        // console.log("This is how we can also add function in objects");
        // console.log(`Username: ${this.name}`);
        console.log(this);
        // this talks about current context that's why we use this to get value from our current context
    }
}

// console.log(user.newFun());
// console.log(this);


// ================Contructer function=========================================//


function ABC(username, loginTimes, logOutTimes) {
    this.username = username,
        this.loginTimes = loginTimes,
        this.logOutTimes = logOutTimes

    // return this;
}

const userOne = new ABC("sujay", 10, 10);
const userTwo = new ABC("sushant", 12, 11);

console.log(userOne);
console.log(userTwo);