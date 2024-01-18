/*
  - Dentro da pasta src deve existir um arquivo chamado soma_impar.js (x)
  - Dentro do arquivo soma_impar.js deve existir uma função chamada soma_impar (x)
  - A função deve receber um número inteiro positivo (x)
  - A função deve retornar a soma de todos os números ímpares de 1 até o número passado como argumento
  - A mensagem de erro "Função aceita apenas números inteiros positivos." deve ser retornada quando o argumento não for do tipo inteiro (x)
  - Finalizando desafio
*/

function soma_impar(n1) {
  if (Number.isInteger(n1) && n1 >= 0) {
    let soma = 0;
    for (let impar = 1; impar <= n1; impar += 2) {
      soma += impar;
    }
    return soma;
  } else {
    return "Função aceita apenas números inteiros positivos.";
  }
}
