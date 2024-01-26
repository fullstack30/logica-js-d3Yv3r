/*
  Dentro da pasta src deve existir um arquivo chamado fatorial.js (x)
  Dentro do arquivo fatorial.js deve existir uma função chamada fatorial (x)
  A função deve aceitar como argumento um número inteiro positivo (x)
  A função deve retornar o resultado do cálculo fatorial
  A mensagem de erro "Função deve receber um argumento do tipo inteiro positivo." deve ser retornada quando
  A função receber um valor numérico não inteiro
  A função receber um valor numérico menor que 0
  A função receber um valor não numérico
*/

function fatorial(n1) {
  let resultado = n1;

  if (n1 < 0 || n1 === null || n1 === undefined || n1 === "" || n1 === NaN) {
    return "Função deve receber um argumento do tipo inteiro positivo.";
  }

  while (n1 > 1) {
    n1--;
    resultado *= n1;
  }

  if (typeof resultado !== "number") {
    return "Função deve receber um argumento do tipo inteiro positivo.";
  } else {
    return resultado;
  }
}

console.log(fatorial("3"));
