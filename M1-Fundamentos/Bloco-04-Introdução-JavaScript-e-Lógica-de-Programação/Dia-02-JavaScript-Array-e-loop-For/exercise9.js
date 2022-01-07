// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let array = [];
for (let number = 1; number <= 25; number += 1) {
  array.push(number)
}
console.log(array);

for (const number of array) {
    let numberDivision = number / 2 
    console.log(numberDivision);
  }