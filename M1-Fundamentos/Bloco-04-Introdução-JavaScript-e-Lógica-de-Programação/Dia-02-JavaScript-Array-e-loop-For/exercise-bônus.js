let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Bônus
// Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
// http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/

/* Código exemplar do Método bubble Sort
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
} */

// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

for (let firstIndex = 1; firstIndex < numbers.length; firstIndex += 1) {
  for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
    if (numbers[firstIndex] < numbers[secondIndex]) {
      let position = numbers[firstIndex];
      numbers[firstIndex] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let firstIndex = 1; firstIndex < numbers.length; firstIndex += 1) {
  for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
    if (numbers[firstIndex] > numbers[secondIndex]) {
      let position = numbers[firstIndex];
      numbers[firstIndex] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let numbersBonus = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for (let i = 0; i < numbersBonus.length; i += 1) {
  if (i + 1 < numbersBonus.length) {
    newArray.push(numbersBonus[i] * numbersBonus[i + 1]);
  } else {
    newArray.push(numbersBonus[i] * 2);
  }
}
console.log(newArray);