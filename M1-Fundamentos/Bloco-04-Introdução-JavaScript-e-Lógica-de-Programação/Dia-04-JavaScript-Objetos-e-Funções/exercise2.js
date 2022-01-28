// Parte II - Funções
// Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.
//Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true
  }
  return false
}
console.log(palindromo('arara')); // true
console.log(palindromo('teste')); // false

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indexLargestNumber(number) {
  let indexLargest = 0;
  for (let indice in number) {
    if (number[indice] > number[indexLargest]) {
      indexLargest = indice;
    }
  }
  return indexLargest;
}
console.log(indexLargestNumber([2, 3, 6, 7, 10, 1])); // 4

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indexSmallestNumber(number) {
  let indexSmallest = 0;
  for (let indice in number) {
    if (number[indice] < number[indexSmallest]) {
      indexSmallest = indice;
    }
  }
  return indexSmallest;
}
console.log(indexSmallestNumber([2, 3, 6, 7, 10, 1])); // 5
console.log(indexSmallestNumber([-2, -3, -6, -7, -10, -1])); // 4

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function largestName(arrayNames) {
  let largestName = arrayNames[0];
  for (const name of arrayNames) {
    if (name.length > largestName.length) {
      largestName = name
    }
  }
  return largestName;
}
console.log(largestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // Fernanda

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.



// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.



// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .       