function nom(){
    console.log('name : sujay');
    console.log("Don the jon");
}

nom();


function loop(){
    for(let i=0; i<=6; i++ ){
        console.log(i);
    }
}

loop();

// nested function a funtion which is call inside should be call it inside only and call main function outside 

function outside(){
    console.log("outside function");

    function inside(){
        console.log("inside function");
    }

    inside(); //call it inside only bcz itis inside function
}

// inside();
outside();


// parameters and arguments

function calling_arg  (a)   {      //paramter
    console.log(a);

    console.log("Inside a function");
}

calling_arg(1);  //argument