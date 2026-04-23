let masterArray = [1,2,3,'+',4,5,6,'-',7,8,9,'*','cls',0,'=','/']
const motherM = document.querySelector("#mother")
const content = document.querySelector("#content")
const screen = document.querySelector("#screen")
const container1 = document.querySelector("#buttons1")
for(let i = 0; i < 4;i++)
{
    let content = document.createElement("button");
    content.classList.add("buts");
    content.textContent = masterArray[i]
    container1.appendChild(content);
}

const container2 = document.querySelector("#buttons2")

for(let i = 4; i < 8;i++)
{
    let content = document.createElement("button");
    content.classList.add("buts");
    content.textContent = masterArray[i]
    container2.appendChild(content);
}

const container3 = document.querySelector("#buttons3")

for(let i = 8; i < 12;i++)
{
    let content = document.createElement("button");
    content.classList.add("buts");
    content.textContent = masterArray[i]
    container3.appendChild(content);
}

const container4 = document.querySelector("#buttons4")

for(let i = 12; i < 16;i++)
{
    let content = document.createElement("button");
    content.classList.add("buts");
    content.textContent = masterArray[i]
    container4.appendChild(content);
}

function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

function operate(operator, num1, num2) {
    if(operator == '+') return add(num1,num2);
    else if(operator == '-') return subtract(num1,num2);
    else if(operator == '*') return multiply(num1, num2);
    else if(operator == '/') return divide(num1, num2);
}

let num1 = 0,num2 = 0,operator,check = true, result = 0,countinue = true;
let numArr = [], numArr1 = [];
let counter = 0, counter1 = 0;

motherM.addEventListener('click', (event) => {

    if(event.target.textContent == 'cls') {
        num1 = 0, num2 = 0,counter = 0, counter1 = 0, operator = null,numArr=[], numArr1=[], check = true, result = 0, countinue = true;
        screen.textContent = '0'
        content.appendChild(screen)
        return;
    }

    if(!['+','-','*','/','='].includes(event.target.textContent) && check == false)
    {
        numArr1[counter1] = event.target.textContent
        console.log("NumARR1: " + numArr1[counter1])
        counter1++
    }
    if(!['+','-','*','/','='].includes(event.target.textContent) && check == true)
    {
        numArr[counter] = event.target.textContent;
        console.log("numArr: " + numArr[counter])
        counter++;
    } if(['+','-','*','/'].includes(event.target.textContent)) {
        num1 = Number(numArr.join(""))
        console.log("Num1: " + num1)
        screen.textContent = num1;
        content.appendChild(screen)
        operator = event.target.textContent;
        console.log("Op: "+ operator)
        check = false;
    } if(event.target.textContent == '=') {
        num2 = Number(numArr1.join(""))
        console.log(num2)
        screen.textContent = num2;
        content.appendChild(screen)
        if(countinue == true) {
            result += operate(operator, num1, num2)
            countinue = false;
        } else {
            result = operate(operator, result, num2)
        }
        
        screen.textContent = result;
        content.appendChild(screen)

        num1 = 0, num2 = 0,counter = 0, counter1 = 0, operator = null,numArr=[], numArr1=[];

    } 
})





