

let answerBox = document.querySelector('#text-area');
let equalButton = document.querySelector('#equalButton');
let enterButton = document.querySelectorAll('#enterButton');
let clearButton = document.querySelector('#clearButton');
let operator = document.querySelectorAll("#operator")
let normalTheme = document.querySelector('#normalTheme');
let darkTheme = document.querySelector('#darkTheme');
let haloweenTheme = document.querySelector('#haloweenTheme');
let h1Grab = document.querySelector('h1');
let btn = document.querySelectorAll(".btn")
let container = document.querySelector('.container');
document.body.style.backgroundColor = "LightSteelBlue"


//theme functionality
normalTheme.addEventListener('click', normalEvent);
function normalEvent(){
    document.body.style.backgroundColor = 'LightSteelBlue';
    h1Grab.style.color = "black";
    btn.forEach(btns =>{
        btns.style.backgroundColor = "white";
        btns.style.color = "black";
    }) 
    answerBox.style.backgroundColor = "white"
    answerBox.style.color = "black"
    container.style.backgroundColor = "maroon"

}

darkTheme.addEventListener('click', darkEvent);
function darkEvent(){
    document.body.style.backgroundColor = 'DarkBlue';
    h1Grab.style.color = "white";
    btn.forEach(btns =>{
        btns.style.backgroundColor = "maroon";
        btns.style.color = "white";
    }) 
    answerBox.style.backgroundColor = "maroon"
    answerBox.style.color = "white"
    container.style.backgroundColor = "DarkSlateGrey"

}   

haloweenTheme.addEventListener('click', haloweenEvent);
function haloweenEvent(){
    document.body.style.backgroundColor = 'orangered';
    h1Grab.style.color = "white";
    btn.forEach(btns =>{
        btns.style.backgroundColor = "black";
        btns.style.color = "white";
    }) 
    answerBox.style.backgroundColor = "black"
    answerBox.style.color = "white"
    container.style.backgroundColor = "ForestGreen"
}



let operatorSelcted = "";
let data = ""; 

//clear function
clearButton.addEventListener('click', clearAll);
function clearAll(){
    operatorSelcted = "";
    data = "";
    answerBox.value = ""
}

//add event listener to all buttons
enterButton.forEach((btn) =>{
    btn.addEventListener('click', fetchData);
});

//enter the typed data in the answerBox
function fetchData(entry){
    data = data + entry.target.innerHTML;
    answerBox.value = data;
}

//add event listener to the operator 
operator.forEach((oper) => {
    oper.addEventListener('click', operate)
});


function operate(entry){
    operatorSelcted = "";
    operatorSelcted = entry.target.innerHTML;
    data =  data + operatorSelcted
    answerBox.value = data;
}

//evaluate the expression
/*
 *check for operator
 *find Index and slice for first and second parts
 *empty the answer box and throw the answer
*/
equalButton.addEventListener('click', evaluate);
function evaluate(){
    let index = data.indexOf(operatorSelcted);
    let first =  data.slice(0,index);
    let end =  data.slice(index+1);
    let intFirst = parseFloat(first);
    let intSecond = parseFloat(end);
    answerBox.value = "";

    if (first === "" || end === ""){
        answerBox.value = "Incomplete Information"
    }

    else if (operatorSelcted ===  "+") {
        let answer = intFirst + intSecond;
        answerBox.value = answer; 
    }
    
    else if (operatorSelcted ===  "-") {
        let answer = intFirst - intSecond;
        answerBox.value = "";
        answerBox.value = answer; 
    }

    else if (operatorSelcted ===  "*") {
        let answer = intFirst * intSecond;
        answerBox.value = "";
        answerBox.value = answer; 
    }

    else if (operatorSelcted ===  "/") {
        let answer = intFirst / intSecond;
        answerBox.value = "";
        answerBox.value = answer; 
    }
    data = "";
}