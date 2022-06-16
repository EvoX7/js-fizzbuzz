
const myWrapper = document.getElementById ("my_wrapper");
const FizzBuzz = (numbers % 15 == 0) ;
const Buzz = (numbers % 5 == 0) ;
const Fizz = (numbers % 3 == 0) ;


// JS Loop exercise 

for (let numbers = 1; numbers < 100 + 1; numbers++) {

    // DIV Creation 
    const squareBox = document.createElement ("div");
    squareBox.classList.add ("col-4, my_box");

    // Add content to DIV 
    squareBox.innerHTML 



    if (numbers % 15 == 0) {
        console.log("FizzBuzz");
     
    }

    else if (numbers % 5 == 0) {
        console.log("Buzz");

    }

    else if (numbers % 3 == 0) {
        console.log("Fizz");

    }

    else {
        console.log(numbers);
    }

    


} 