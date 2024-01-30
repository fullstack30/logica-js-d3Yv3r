/*
  Dentro da pasta src deve existir um arquivo chamado apenas_par.js
  Dentro do arquivo apenas_par.js deve existir uma função chamada apenas_par
  A função deve receber como argumento um valor do tipo inteiro que pode ser positivo ou negativo
  A função deve retornar uma lista com os números pares entre 0 e o número informado
  A mensagem de erro "Função aceita apenas números inteiros." deve ser retornada quando
  O argumento passado não for do tipo inteiro
  Nenhum argumento for passado
*/

function apenas_par(n1) {
  if (!Number.isInteger(n1)) {
    return "Função aceita apenas números inteiros.";
  }
  let newArray = [];
  if (n1 == 0) {
    return 0;
  }
  if (n1 >= 0) {
    for (let i = 0; i <= n1; i++) {
      if (i % 2 == 0) {
        newArray.push(i);
      }
    }
  }
  if (n1 <= 0) {
    for (let i = n1; i <= 0; i++) {
      if (i % 2 == 0) {
        newArray.push(i);
      }
    }
  }
  return newArray;
}

console.log(apenas_par(-6));
