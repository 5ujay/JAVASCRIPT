console.log("hi");

let value=0;
let holiday="no"


switch (value) {
  
     case 0:
        if (holiday=="yes") {
            console.log("you can take leave");
        } else 
        console.log("This is monday");
        break;
    case 1:
            console.log("This is Tuesday");
            break;
    case 2:
        console.log("This is Wednesday");
        break;
    case 3:
        console.log("This is Thursday");
        break;
    case 4:
        console.log("This is Friday");
        break;
    case 5:
        console.log("This is Saturday");
        break;
    default:
        console.log("none");
        break;
}