// 1. Crie uma função que receba um número e retorne seu fatorial.

const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}

console.log(factorial(5));
// 1. Porém recursiva

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
