// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let highestValue = 0
// Usando "let highestValue = numbers[0];" o array compara apenas as posições do array, caso eu declarasse highestValue como 0 e o array possuísse apenas valores negativos, o resultado seria 0, porque nenhum valor do meu array é maior que 0.

let highestValue = numbers[0];
for (const number of numbers) {
  if (number > highestValue) {
    highestValue = number;
  }
}
console.log(highestValue);
