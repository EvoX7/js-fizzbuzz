
const myWrapper = document.getElementById("myWrapper");



// JS Loop exercise 

for (let numbers = 1; numbers < 100 + 1; numbers++) {

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

    let FizzBuzz = (numbers % 15 == 0);
    let Buzz = (numbers % 5 == 0);
    let Fizz = (numbers % 3 == 0);

    // DIV Creation 
    const squareBox = document.createElement("div");
    squareBox.classList.add("col-1", "myBox");

    // Add content to DIV 
    squareBox.innerHTML = numbers;
    myWrapper.append(squareBox);



} 