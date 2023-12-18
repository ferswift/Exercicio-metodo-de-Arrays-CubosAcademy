/*
Abaixo temos uma lista de cadastro de usuários e seus respectivos pets. Crie uma função que facilite encontrar o dono de um pet específico.

Supondo que estamos buscando o pet Max, ao encontrar, o sistema deverá imprimir a mensagem O dono(a) do(a) pudim é o(a) gabriel, caso contrário, irá imprimrir Que pena dolly, não encontramos seu dono(a).
*/
const usuarios = [
  {
    nome: "gabriel",
    pets: ["pipoca", "pudim"],
  },
  {
    nome: "jorge",
    pets: ["wii", "butter"],
  },
  {
    nome: "maria",
    pets: ["lulu"],
  },
];

//1 passo: Encontrar o pet <
//2 passo: caso achar retornar o nome do dono do pet
//3 passo: caso contrario retornar apenas o nome do pet
//4 passo: tratar com template strings a mensagem de forma correta.

function acharDonoDoPet(usuarios, nomeDoPet) {
  let dono;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].pets.includes(nomeDoPet)) {
      dono = usuarios[i].nome;
    }
  }
  const mensagemDeSucesso = `O Dono(a) do(a) ${nomeDoPet} é o(a) ${dono}`;
  const mensagemDeFalha = `Que pena ${nomeDoPet}, não encontramos seu dono(a).`;

  if (dono) {
    return mensagemDeSucesso;
  } else {
    return mensagemDeFalha;
  }
}

const resultado = acharDonoDoPet(usuarios, "lu");
console.log(resultado);
