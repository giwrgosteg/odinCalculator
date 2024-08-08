const operations = document.getElementsByClassName("functions");
const equal = document.getElementById("equal");

const result = document.getElementById("res");
const clear = document.getElementById("C");

const numbers = document.getElementsByClassName("numbers");

const decimal = document.getElementById("decimal");

let mathArray = [0, '', 0];
let index = 0;

function clearFunction() {
    displayUpdate('0', 1);
    mathArray = ['0', '', '0'];
    index = 0;
}

function displayUpdate(text, num) {
    if (num == 1) {
        result.innerText = text;
    }

    if (result.innerText == '0' && num == 0){
        result.innerText = text; 
    }
    else if (result.innerText != '0' && num == 0) {
        result.innerText += text;
    }
}

function numberFunction() {
    console.log(this.innerText);
    if (mathArray[index] == 0) {
        mathArray[index] = this.innerText;
    }
    else {
        mathArray[index] += this.innerText;
    }

    displayUpdate(this.innerText, 0);
}

function operate() {
    if (index == 2) {
        equalFunction();
    }

    mathArray[1] = this.innerText;
    index = 2;
    displayUpdate(this.innerText, 0);
}

function equalFunction() {
    let result = '0';

    if (index == 2) {
        let first = Number(mathArray[0]);
        let second = Number(mathArray[2]);
        console.log(mathArray);
        if  (mathArray[1] == "+") {
            result = String(first + second);
            result.innerText = result;
        }
        else if (mathArray[1] == "-") {
            result = String(first - second);
            result.innerText = result;
        }
        else if (mathArray[1] == "*") {
            result = String(first * second)
            result.innerText = result;
        }
        else if (mathArray[1] == "/") {
            result = String(first / second)
            result.innerText = result;
        }
    }
    mathArray = [result, '', '0'];
    displayUpdate(result, 1);
    index = 0;
}

for (let i = 0; i < operations.length; i++){
    operations[i].addEventListener("click", operate);
}

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", numberFunction);
}

equal.addEventListener("click", equalFunction);
clear.addEventListener("click", clearFunction);
decimal.addEventListener("click", operate);


