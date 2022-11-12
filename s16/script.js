console.log("hello nested")

//Nested Ifs
//An If Statement that is the target of another if or else.

//pwede lagay sa baba yung user prompt
// let userInput = prompt
// ("Enter your age")

// function eligibility (age) {
//     if (age < 18)
//     {
//         return ("Minor ka pa, child labor yan if ever");
//     }
//     else
//     {   
//         // Nested if sample
//         if (age >= 18 && age <=60)
//         {
//             return ("Aba pwede ka pa mag work, ayihi sasahod na siya");
//         } 
//         else
//         {
//             return ("Tanders ka na,penion na need mo");
//         }
//     }
// }

// console.log(eligibility(userInput))

// Exercies 1: Nested IF
/*
    Create a JavaScript code that will determine if the input type is even or odd.

    MAIN GOAL:
    Perform a Nested If for this scenario.
    Enclose inside the function.
    When a user input a word, it will display “Unexpected Input”
    When a user inputs none, it will display “Please input inside the box”.
    When a user inputs a valid number, it will display even or odd.

*/

// SOLUTION: REDEN

function isNumeric(params) {
    return !isNaN(parseFloat(params)) && isFinite(params);
    }
    
    function isEven(params) {
    if (params % 2 == 0) return true;
    return false;
    }
    
    function main() {
    let inputData = prompt("Please enter a number");
    
    let msg = "";
    
    if (inputData.length === 0) {
        msg = ("Please input a data");
    } else if (isNumeric(inputData) == true) {
        if (isEven(inputData)) {
            msg = (inputData + " <- is a EVEN number");
        } else {
            msg = (inputData + " <- is a ODD number");
        }
    } else {
        msg = ("Whoa, unexpected input.");
    }
    
    var nodeInput = document.getElementById("input-area");
    nodeInput.innerHTML = (`<p>Input Data is ${inputData}</p>`);
    
    var nodeOutput = document.getElementById("output-area");
    nodeOutput.innerHTML = (`<p>Output message : ${msg}</p>`);
    }
    
    main();

// SOLUTION: JELLY


function oddEven(num){
    if(isNaN (num) || typeof parseInt (num) !== "number"){
        //isNan - determines whether a values is NaN (not a number) or a number
        return `Unexpected Input`;
    }

    else if (num === '') {
        return "Please input inside the box";
    }

    else {
        if (num % 2 == 0)
        {
            return ("Even Number");
        }
        else {
            return ("Odd Number");
        }
    }
}

let userInput = prompt ("Give Me a Number");
console.log(oddEven(userInput));
      