![](https://i.imgur.com/xG74tOh.png)

Exercício 05
Encontrar dono do pet
Abaixo temos uma lista de cadastro de usuários e seus respectivos pets. Crie uma função que facilite encontrar o dono de um pet específico.

Entrada
A entrada do seu programa será composta por um objeto que possui uma variavel do tipo nome que é string e um array do tipo string:

usuarios: variavel do tipo string
nome: Array do tipo string
Saida
A saida do seu programa será composta uma string única dividida por virgula:

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
]
Supondo que estamos buscando o pet Max, ao encontrar, o sistema deverá imprimir a mensagem O dono(a) do(a) pudim é o(a) gabriel, caso contrário, irá imprimrir Que pena dolly, não encontramos seu dono(a).
