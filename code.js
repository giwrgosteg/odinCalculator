const operations = document.getElementsByClassName("operations");
const equal = document.getElementById("equal");

const result = document.getElementById("res");
const clear = document.getElementById("C");
const backspace = document.getElementById("backspace");

const numbers = document.getElementsByClassName("numbers");

const decimal = document.getElementById("decimal");

let mathArray = [0, '', 0];
let index = 0;
let decBool = false;

function backspaceFunction(){
    if (result.innerText != "0") {
        result.innerText.slice(0, -1);
        mathArray[index].slice(0, -1);
        console.log(mathArray);
    }
}

function clearFunction() {
    displayUpdate("0", 1);
    mathArray = ["0", "", "0"];
    index = 0;
    decBool = false;
}

function displayUpdate(text, num) {
    if (num == 1) {
        result.innerText = text;
    }

    if (result.innerText == "0" && num == 0){
        result.innerText = text; 
    }
    else if (result.innerText != "0" && num == 0) {
        result.innerText += text;
    }
}

function decimalFunction() {
    if (decBool == false) {
        result.innerText += "."; 
        mathArray[index] += ".";
        decBool = true;
    }
}

function numberFunction() {
    if (mathArray[index] == "0") {
        mathArray[index] = this.innerText;
    }
    else {
        mathArray[index] += this.innerText;
    }

    displayUpdate(this.innerText, 0);
}

function operationsFunction() {
    if (index == 2 && mathArray[2] != "0") {
        operate();
    }

    if (mathArray[2] == '0') {
        displayUpdate(mathArray[0] + this.innerText, 1);
        mathArray[1] = this.innerText;
        index = 2;
    }
    else {
        mathArray[1] = this.innerText;
        index = 2;
        displayUpdate(this.innerText, 0);
    }
}

function operate() {
    let result = "0";

    if (index == 2) {
        let first = Number(mathArray[0]);
        let second = Number(mathArray[2]);
        if  (mathArray[1] == "+") {
            result = String(Math.round((first + second) * 10) / 10);
            result.innerText = result;
        }
        else if (mathArray[1] == "-") {
            result = String(Math.round((first - second) * 10) / 10);
            result.innerText = result;
        }
        else if (mathArray[1] == "x") {
            result = String(Math.round((first * second) * 10) / 10)
            result.innerText = result;
        }
        else if (mathArray[1] == "/") {
            if (second == 0) {
                displayUpdate("Error", 1);
                return;
            }
            result = String(Math.round((first / second) * 10) / 10)
            result.innerText = result;
        }
    }
    mathArray = [result, "", "0"];
    displayUpdate(result, 1);
    index = 0;
    decBool = false;
}

for (let i = 0; i < operations.length; i++){
    operations[i].addEventListener("click", operationsFunction);
}

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", numberFunction);
}

equal.addEventListener("click", operate);
clear.addEventListener("click", clearFunction);
decimal.addEventListener("click", decimalFunction);
backspace.addEventListener("click", backspaceFunction);
