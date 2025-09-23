function ejemplo(elemento) {
    alert("like recibido", elemento);
}

function turnOff(element) {
    if(element.innerText == "On"){
        element.innerText = "Off";
    }else{
        element.innerText = "On";
    }
    
}

function hide(element) {
    element.remove();
}

