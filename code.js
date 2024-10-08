const operations = document.getElementsByClassName("operations");
const equal = document.getElementById("equal");

const result = document.getElementById("res");
const clear = document.getElementById("C");
const backspace = document.getElementById("backspace");

const numbers = document.getElementsByClassName("numbers");

const decimal = document.getElementById("decimal");

let mathArray = ["0", "", "0"];
let index = 0;
let decBool = false;

function backspaceFunction(){
    if (mathArray[index] != "0" && mathArray[index].length > 1) {
        result.innerText = result.innerText.slice(0, -1);
        mathArray[index] = mathArray[index].slice(0, -1);
    }
    else if (mathArray[index].length == 1 && mathArray[index] != "0") {
        if (index == 0) {
            result.innerText = "0";
            mathArray[index] = "0";
        }
        else if (index == 2) {
            result.innerText = result.innerText.slice(0, -1);
            mathArray[index] = "0";
        }
    }
    else if (mathArray[1] != '' && index == 2) {
        result.innerText = result.innerText.slice(0, -1);
        mathArray[1] = "";
        index = 0;
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
    if (mathArray[index].length < 5) {
        if (mathArray[index] == "0") {
            mathArray[index] = this.innerText;
        }
        else {
            mathArray[index] += this.innerText;
        }
    
        displayUpdate(this.innerText, 0);
    }   
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
    if (mathArray[2] != "0") {
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

document.addEventListener("keydown", function(event) {
    if (event.key == "0") {
        numbers[9].click();
    }
    else if (event.key == "1") {
        numbers[6].click();
    }
    else if (event.key == "2") {
        numbers[7].click();
    }
    else if (event.key == "3") {
        numbers[8].click();
    }
    else if (event.key == "4") {
        numbers[3].click();
    }
    else if (event.key == "5") {
        numbers[4].click();
    }
    else if (event.key == "6") {
        numbers[5].click();
    }
    else if (event.key == "7") {
        numbers[0].click();
    }
    else if (event.key == "8") {
        numbers[1].click();
    }
    else if (event.key == "9") {
        numbers[2].click();
    }

    else if (event.key == "+") {
        operations[3].click();
    }
    else if (event.key == "-") {
        operations[2].click();
    }
    else if (event.key == "*") {
        operations[1].click();
    }
    else if (event.key == "/") {
        operations[0].click();
    }
    else if (event.key == "=" || event.key == "Enter") {
        equal.click();
    }
    else if (event.key == "Backspace") {
        backspace.click();
    }
    else if (event.key == ".") {
        decimal.click();
    }
    else if (event.key == "c" || event.key == "C") {
        clear.click();
    }
})
