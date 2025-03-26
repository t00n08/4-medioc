function numeros() {
    let i = 1;
while (i <=10) {
  console.log(i);
  i++;
}
}

function imc() {
    let count = 10;
    let array = [];
    for (let count = 10; count >= 1; count-- ){
        array.push(count);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function pome() {
    let nota1 = prompt("ingrese tu nota:");
    let nota2 = prompt("ingrese tu peso:");
    let nota3 = prompt("ingrese tu peso:");
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio < 4.0) {
        alert("Reprobado");
      } else {
        alert("Aprobado");
      }
}



