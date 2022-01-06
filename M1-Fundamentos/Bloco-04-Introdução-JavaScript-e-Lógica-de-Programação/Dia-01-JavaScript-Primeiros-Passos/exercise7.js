/* 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let note = 69;

if (note > 100 || note < 0) {
  return console.log('Invalid note')
} else if (note >= 90) {
  return console.log('A')
} else if (note >= 80) {
  return console.log('B')
} else if (note >= 70) {
  return console.log('C')
} else if (note >= 60) {
  return console.log('D')
} else if (note >= 50) {
  return console.log('E')
} else {
  return console.log('F')
}