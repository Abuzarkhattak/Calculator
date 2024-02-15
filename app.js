const display = document.getElementById("display");

function button(input) {
    display.value += input;
}

function clearDisplay(){
  display.value = "";
}


function claculator() {
    try{
        display.value = eval(display.value)
    }
    catch(error){
       display.value = "Error";
    }
 }