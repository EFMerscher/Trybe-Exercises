// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestValue = 0;
for (const number of numbers) {
  if (number > highestValue) {
    highestValue = number;
  }
}
console.log(highestValue);