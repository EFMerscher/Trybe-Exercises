/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

let chessPieceMovement = 'KING'
switch(chessPieceMovement.toLowerCase()) {
    case 'king':
        console.log('King-> A house just in any direction.');
        break;
    case 'queen':
        console.log('Queen-> Diagonal, horizontal and vertical.');
        break;   
    case 'bishop':
        console.log('Bishop -> Diagonal');
        break;
    case 'rook':
        console.log('Tower -> Horizontal and Vertical.');
        break;
    case 'horse':
        console.log('Horse -> "L" can jump over pieces.');
        break;
    case 'pawn':
        console.log('Pawn -> Only one square forward, on the first move it can be two squares.');
        break;
    default:
        console.log('unidentified chess piece');
        break;    
}