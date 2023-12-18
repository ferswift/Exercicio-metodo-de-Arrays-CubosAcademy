const texto = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

function inversaoDeFrutas(array) {
  let arrayInvertido = array.reverse();
  arrayInvertido = array.join(",");

  return arrayInvertido;
}

const resultado = inversaoDeFrutas(texto);
console.log(resultado);
