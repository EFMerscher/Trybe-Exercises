// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];
for (let number = 1; number <= 25; number += 1) {
  array.push(number)
}
console.log(array);

/*
array , number , number <= 25 , array
[]    ,   1         true           [1]
[1]   ,  2         true          [1, 2]
[1, 2]  3       true           [1, 2, 3]
[1, 2, 3] 4    true          [1, 2, 3, 4] 
*/
