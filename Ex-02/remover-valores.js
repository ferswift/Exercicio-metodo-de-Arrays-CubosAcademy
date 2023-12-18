/*
Remova o primeiro e último item do array original e adicione o animal Amora a uma nova string da seguinte forma:

"Pudim | Puff | Amora"
*/

const pets = ["Pipoca", "Pudim", "Puff", "Sheik"];

function alterarAnimais(animais) {
  let animaisAlterados = animais;
  animaisAlterados.splice(0, 1);
  animaisAlterados.splice(animais.length - 1, 1, "Amora");

  const juntarAnimais = animaisAlterados.join(" | ");

  return juntarAnimais;
}

const resultado = alterarAnimais(pets);
console.log(resultado);
