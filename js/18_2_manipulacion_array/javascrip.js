let listaCompras=[]; //ejercicio 1
function agregarElementoCompra() {
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = elemento;
    resultado.appendChild(item);
}
let carrito = [];
function mostrarListaCompra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML =""; //limpiar antes de mostrar

    for (let i = 0; i< carrito.length; i++){
        const li = document.createElement(li);
        li.className ="list-group-item d-flex justify-content-between aling-items-center mb-2";
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input =document.getElementById("lista2");
    const valor = input.value.trim();//guardo valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor);

    input.value = "";
    input.focus();// agregamos un foco hacia el input

    mostrarListaCompra()
}

function eliminarUltimoElemento(){
    if(carrito.length > 0){
        carrito.pop();
    }
    mostrarListaCompra()
}


