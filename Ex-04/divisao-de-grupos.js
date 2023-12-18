const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Mandis", "Maroquinho"];
const index = 4;

function dividirGrupos(array, number) {
  const grupo1 = array.splice(0, number);
  const grupo2 = array; // Restante dos elementos após a divisão

  return [grupo1, grupo2];
}

const [grupo1, grupo2] = dividirGrupos(nomes, index);

console.log(`Grupo 1: ${grupo1.join(", ")} / Grupo 2: ${grupo2.join(", ")}`);
