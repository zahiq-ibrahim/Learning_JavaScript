const outputString = document.getElementById('output');
const prevOP = document.getElementById('prev-op');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button =>{
    button.addEventListener('click', () => {

        if(button.textContent === "AC"){
            outputString.textContent = "";
            prevOP.textContent = "";
        }else if(button.textContent === "<x"){
            outputString.textContent = outputString.textContent.slice(0,-1);
        }
        else if(button.textContent === "="){
            prevOP.textContent = outputString.textContent;
            outputString.textContent = calculate();
        }
        else{
         outputString.textContent = outputString.textContent + button.textContent;
        }
    });
});

function calculate(){
    return eval(outputString.textContent.replaceAll('X', '*'));
}

// outputString.textContent = "";
// prevOP.textContent = "";