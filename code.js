const functions = document.getElementsByClassName("functions");

const result = document.getElementById("res");
const clear = document.getElementById("C");

const numbers = document.getElementsByClassName("numbers");

const decimal = document.getElementById("decimal");

let mathArray = [];

function clearFunction() {
    result.innerText = "0";
    mathArray = [];
}

function operate() {
    index = 0;
    console.log(mathArray);

    if (this.class = numbers && index > 0) {
        mathArray[index] += this.innerText;
    }
    else{
        mathArray.push(this.innerText);
        index ++;
    }

    
    if (result.innerText == '0'){
        result.innerText = '';
    }
    result.innerText += this.innerText;
}

for (let i = 0; i < functions.length; i++){
    functions[i].addEventListener("click", operate);
}

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", operate);
}

clear.addEventListener("click", clearFunction);
decimal.addEventListener("click", operate);


