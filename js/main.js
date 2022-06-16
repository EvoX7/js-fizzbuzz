
const myWrapper = document.getElementById("myWrapper");


// JS Loop exercise 

for (let numbers = 1; numbers <= 100 ; numbers++) {

    let FizzBuzz = (numbers % 15 == 0);
    let Buzz = (numbers % 5 == 0);
    let Fizz = (numbers % 3 == 0);

    // DIV Creation 
    const squareBox = document.createElement("div");
    squareBox.classList.add("col-1", "myBox" );

    // Print words 
    let message;

    if (FizzBuzz == true) {
        console.log("FizzBuzz");
        message = "FizzBuzz";
        squareBox.classList.add("acqua");
    }

    else if (Buzz == true) {
        console.log("Buzz");
        message = "Buzz";
        squareBox.classList.add("yellow");
    }

    else if (Fizz == true) {
        console.log("Fizz");
        message = "Fizz";
        squareBox.classList.add("orange");
    }

    else {
        console.log(numbers);
        message = numbers;
    }

    // Add content to DIV 
    squareBox.innerHTML = message;
    myWrapper.append(squareBox);
    



} 