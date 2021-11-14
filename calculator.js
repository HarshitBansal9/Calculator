let stringVar = "";
let paragraph = document.querySelector(".user-input");
let operandVar;
let answer=0;
let operatorVar="";
document.querySelector(".button1").addEventListener('click', function(event) {
    if (event.target.innerText === "÷"){
        operandVar = parseInt(stringVar,10);
        stringVar = "0";
        answer += operandVar;
        operatorVar = "÷";
    }
    else if (event.target.innerText === "C"){
        stringVar="0";
        paragraph.innerText = stringVar;
        answer = 0;
        operandVar = 0;
    
    }
    else if (event.target.innerText === "←"){
        if (stringVar.length === 1){
            stringVar = "0";
            paragraph.innerText = stringVar;
        }
        else{
            stringVar = stringVar.substring(0,stringVar.length - 1)
            paragraph.innerText = stringVar;
        }
    }
    else{
        stringVar += event.target.innerText;
        paragraph.innerText = stringVar;
    }
});
document.querySelector(".button2").addEventListener('click', function(event) {
    if (event.target.innerText === "×"){
        operandVar = parseInt(stringVar,10);
        stringVar = "0";
        answer += operandVar;
        operatorVar = "×";
        operandVar=0;
    }
    else{
        stringVar += event.target.innerText;
        paragraph.innerText = stringVar;
    }
    });
document.querySelector(".button3").addEventListener('click', function(event) {
    if (event.target.innerText === "-"){
        operandVar = parseInt(stringVar,10);
        stringVar = "0";
        answer += operandVar;
        operatorVar = "-";
        operandVar=0;
    }
    else{
        stringVar += event.target.innerText;
        paragraph.innerText = stringVar;
    }
  });
  document.querySelector(".button4").addEventListener('click', function(event) {
    if (event.target.innerText === "+"){
        operandVar = parseInt(stringVar,10);
        stringVar = "0";
        answer += operandVar;
        operatorVar = "+";
    }
    else{
        stringVar += event.target.innerText;
        paragraph.innerText = stringVar;
    }   
  });
  document.querySelector(".button5").addEventListener('click', function(event) {
    if (event.target.innerText === "="){
        if (operatorVar === "+"){
            operandVar = parseInt(stringVar,10);
            answer += operandVar;
            paragraph.innerText = answer.toString();
            
        }
        if (operatorVar === "×"){
            operandVar = parseInt(stringVar,10);
            answer *= operandVar;
            paragraph.innerText = answer.toString();
            
        }
        if (operatorVar === "÷"){
            operandVar = parseInt(stringVar,10);
            answer /= operandVar;
            paragraph.innerText = answer.toString();
            
        }
        if (operatorVar === "-"){
            operandVar = parseInt(stringVar,10);
            answer -= operandVar;
            paragraph.innerText = answer.toString(); 
        }
        stringVar = answer.toString();
        answer = 0;
    }
    else{
        stringVar += event.target.innerText;
        paragraph.innerText = stringVar;
    }
  });
