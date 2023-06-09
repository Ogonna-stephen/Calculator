let display = document.querySelector(".display");

let displayValue = display.textContent;

let num = document.querySelectorAll(".number").length;

let clr = document.querySelector(".clear");

let firstNum;

let secondNum;

let operation;

clr.addEventListener('click', (e) => {
    let press = e.target;
    press = 0;
    display.textContent = press;
})

for(let n = 0; n < num; n++){
        document.querySelectorAll(".number")[n].addEventListener('click', function numbers(e) {
            let pressed = e.target;
            let clicked = pressed.textContent;
            displayValue = display.textContent;
            if(display.textContent === '0') {
                display.textContent = clicked;
            }else {
                display.textContent = displayValue + clicked;
            }
        })
    
}


let ope = document.querySelectorAll(".cal").length;
for(let y = 0; y < ope; y++) {
    document.querySelectorAll(".cal")[y].addEventListener('click', function(e) {
        let operate = e.target;
        operation = operate.textContent;
        firstNum = display.textContent;
        display.textContent = '';
    })
}

let result = document.querySelector(".equalTo");
result.addEventListener('click', function(e) {
    secondNum = display.textContent;
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    if(operation === '+') {
        let answer = firstNum + secondNum;
        display.textContent = answer;
    }
    else if(operation === '-') {
        let answer = firstNum - secondNum;
        display.textContent = answer;
    }
    else if(operation === '/') {
        let answer = firstNum / secondNum;
        display.textContent = answer;
    }
    else if(operation === '*') {
        let answer = firstNum * secondNum;
        display.textContent = answer;
    }
})

document.addEventListener('keydown', function(e) {
    let pressedKey = e.key;
    displayValue = display.textContent;
    if(display.textContent === '0') {
        display.textContent = pressedKey;
    }else {
        display.textContent = displayValue + pressedKey;
    }
    
})