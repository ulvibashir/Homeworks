let digit1;
let digit2;
let operator;


while (true) {
    digit1 = +prompt("Enter digit 1: ");
    if(!isNaN(digit1)) break;
}

while (true) {
    digit2 = +prompt("Enter digit 2: ");
    if(!isNaN(digit2)) break;
}

while(true){
    operator = prompt("Enter operator: ");
    if(operator == '+' ||
       operator == '-' ||
       operator == '*' ||
       operator == '/') break;
}


debugger
let result = Calculate(digit1,digit2,operator);
alert(`${digit1} ${operator} ${digit2} = ${result}`);
console.log(`${digit1} ${operator} ${digit2} = ${result}`);

function Calculate(digit1, digit2, operator) {
    debugger
    switch(operator){
        case '+': return digit1 + digit2;
        case '-': return digit1 - digit2;
        case '*': return digit1 * digit2;
        case '/': {
            if(digit2 == 0) return "You cannot divide by Zero";
            else return digit1 / digit2;
        }
    }
}