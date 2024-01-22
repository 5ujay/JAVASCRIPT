// IIFE
// Immediately Ivoked function expressions

// named if this is konwn as named iife bcz it has name
(function ABC() {
    console.log("DB Connected");
})();

// must put semi colon to get its value

(function DEF() {
    console.log("DB Connected");
})();


// simple if this is konwn as dosent have iife bcz it has name
((name) => {
    console.log(`This is IIFE arrow function ${name}`);
})("by chai aur code")