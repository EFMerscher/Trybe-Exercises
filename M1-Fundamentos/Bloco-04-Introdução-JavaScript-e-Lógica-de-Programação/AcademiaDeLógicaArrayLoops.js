// Exercício 1
/*
Contar até 10
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.
*/

function accumulator(limit){
  // Desenvolva seu código nessa função
  function accumulator(limit) {
  let accumulator = 1;
  for (let index = 2; index <= limit; index = index + 1) {
    accumulator = accumulator + index;
  }
  return accumulator;
}

module.exports = accumulator;



// Exercício 2
/*
Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------
*/

function oddNumbers(){
  // Desenvolva seu código nessa função
  function oddNumbers() {
  let concatenator = "1";
  for (let index = 3; index <= 50; index = index + 1) {
    if (index % 2 !== 0) {
      concatenator = `${concatenator}, ${index}`;
    }
  }
  return `${concatenator}.`;
}

module.exports = oddNumbers;



// Exercício 3
/*
Onde está o elemento?
Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.
Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------
*/

function findIndexOf(){
  // Desenvolva seu código nessa função
  function findIndexOf(array, element) {
  for (let elem of array) {
    if (elem === element) {
      return array.indexOf(element);
    }
  }
  return "Elemento não encontrado no array.";
}

module.exports = findIndexOf;
