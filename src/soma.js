function soma(n1, n2) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return Number(n1) + Number(n2);
  } else if (typeof n1 !== "number" || n2 !== "number") {
    return "Parâmetros inválidos!";
  }
  return n1 + n2;
}

console.log(soma(3, null));

/**
  Dentro da pasta src deve existir um arquivo chamado soma.js
  Dentro do arquivo soma.js deve existir uma função chamada soma
  A função deve ter dois parâmetros numéricos
  A função deve retornar o resultado da soma entre os dois parâmetros
  A função deve garantir que os parâmetros serão somados e não concatenados
  A mensagem de erro "Parâmetros inválidos!" deve ser retornada quando
  A função receber apenas o primeiro parâmetro
  O primeiro parâmetro não puder ser convertido em um número inteiro
  O segundo parâmetro não puder ser convertido em um número inteiro 
**/
