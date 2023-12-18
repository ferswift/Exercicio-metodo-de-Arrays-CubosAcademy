const pacientes = ["Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

//passo 1: Checar ordem de chegada
//passo 2: Se atender não é necessário passar o nome do paciente
//passo 3: Se agendar o paciente é adicionado ao final da lista

// function filaDeAtendimento(pacientes, tipoDeOperacao, nome) {
//   if (tipoDeOperacao === "atender") {
//     pacientes.shift();
//   } else if (tipoDeOperacao === "agendar") {
//     pacientes.shift();
//     pacientes.push(nome);
//   } else {
//     console.log("Operação invalida");
//   }
//   console.log(pacientes);
// }

function filaDeAtendimento(pacientes, tipoDeOperacao, nome) {
  if (tipoDeOperacao === "atender") {
    pacientes.splice(0, 1); // shift
  } else if (tipoDeOperacao === "agendar") {
    pacientes.splice(0, 1); // shift
    pacientes.splice(pacientes.length, 0, nome); // push
  } else {
    console.log("Operação invalida");
  }
  console.log(pacientes);
}

filaDeAtendimento(pacientes, "agendar", "Pedro");
