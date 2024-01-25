/*
  Dentro da pasta src deve existir um arquivo chamado vogais.js
  Dentro do arquivo vogais.js deve existir uma função chamada vogais
  A função deve receber um texto como argumento
  A função deve retornar a quantidade de vogais encontradas no texto
  A mensagem de erro "Função aceita apenas string como argumento." deve ser retornada quando
  A função receber como argumento qualquer valor diferente de string
*/

function vogais(texto) {
  let totalVogal = 0;
  let vogais = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "á",
    "é",
    "í",
    "ó",
    "ú",
    "ã",
    "õ",
    "â",
    "ê",
    "î",
    "ô",
    "û",
    "à",
    "è",
    "ì",
    "ò",
    "ù",
    "ä",
    "ë",
    "ï",
    "ö",
    "ü",
  ];

  if (typeof texto === "string") {
    for (let index = 0; index < texto.length; index++) {
      if (vogais.indexOf(texto[index].toLowerCase()) !== -1) {
        totalVogal++;
      }
    }
    return totalVogal;
  } else {
    return "Função aceita apenas string como argumento.";
  }
}

// console.log(vogais("CÃo"));
