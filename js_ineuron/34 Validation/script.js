
var form = document.querySelector("form");

form.addEventListener("submit" , (e) => {
    
    e.preventDefault();

    var name = document.querySelector("#name").value;
    var rollno = document.querySelector("#rollno").value;
    var branch = document.querySelector("#branch").value;
    var classno = document.querySelector("#classno").value;
    var department = document.querySelector("#department").value;
    var year = document.querySelector("#year").value;

    var Error = document.querySelector("span");
    if (name == null || name.length < 5 || name.length > 30) {
        Error.innerText = "Error in name"
        Error.style.backgroundColor="red"
    } else {
        Error.innerText = "Saved";
        Error.style.backgroundColor="green"
    }

    console.log(name,rollno,branch,classno,department,year);
})