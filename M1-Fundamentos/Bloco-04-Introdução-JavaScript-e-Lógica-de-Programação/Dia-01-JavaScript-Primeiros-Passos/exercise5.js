/* 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus. 
Um ângulo será considerado inválido se não tiver um valor positivo. */

const angleA = 90;
const angleB = 60;
const angleC = 30;

if (angleA <= 0 || angleB <= 0 || angleC <= 0) {
    console.log('Erro, algum ângulo é igual ou menor que 0')
}
else if (angleA + angleB + angleC === 180) {
    console.log(true)
}
else {
    console.log(false)
}