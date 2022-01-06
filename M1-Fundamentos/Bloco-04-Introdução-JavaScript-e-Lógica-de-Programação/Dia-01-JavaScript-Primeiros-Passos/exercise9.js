// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. Bonus: use somente um if.

let isOdd = false;

if ((number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

// Anotação referentes a questões 8 e 9: Uma variável do tipo boolean nunca vai ser nula, o valor default dela sempre vai ser falsa. Logo se uma condição do meu código não for satisfeita, ela automaticamente vai retornar false.