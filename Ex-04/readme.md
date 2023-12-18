https://i.imgur.com/xG74tOh.png


Divisão de grupos
Crie uma função que receba dois parâmetros, o primeiro sendo um array de nomes e o segundo um número inteiro. A função deverá dividir o array em grupos com a quantidade de nomes de acordo com o numero passado no segundo parâmetro. Caso não seja possível separar em grupos iguais, o último grupo será o restante dos nomes. A função deve imprimir o resultado da divisão dos grupos.

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Mandis', 'Maroquinho'];
const index = 4;
Entrada
A entrada do seu programa será composta por um array do tipo string e um index do tipo number com o tamanho do grupo:

nomes: Array do tipo string
index: Number
Saida
A saida do seu programa será composta uma string única dividida pelo simbolo da barra de divisão na mesma linha (não sendo necessario dar enter ou /n):

Para o exemplo acima deverá imprimir:

Grupo 1: Juninho, Vidal, Guido, Dani / Grupo 2: Mandis, Maroquinho.
