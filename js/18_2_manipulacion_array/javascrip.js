let listaCompras=[]; //ejercicio 1
function agregarElementoCompra() {
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = elemento;
    resultado.appendChild(item);
}