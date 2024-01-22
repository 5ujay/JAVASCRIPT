const user = {
    name: "Sujay",
    roll_no: "49",

    message: function () {
        console.log(`${this.name} is the name of person`);
        console.log(this);
    }
}

// user.message()
// user.name = "ABC"
// user.message()

// console.log(this);

// this can only be used in object 
// function xyz() {
//     const name = "Sujay";
//     console.log(this.name);
// }

// function xyz() {
//     console.log(this);
// }

const xyz = () => {
    // const name = "Sujay";
    console.log(this);
}

// this work in normal function but not in arrow function but *** see this code tp get its clear difference

xyz();
// output : undefined