/*
  Dentro da pasta src deve existir um arquivo chamado inverte_lista.js (x)
  Dentro do arquivo inverte_lista.js deve existir uma função chamada inverte_lista (x)
  A função deve receber como argumento um valor do tipo Array
  A função deve retornar um novo array com os mesmo valores do array original porém na ordem inversa
  A mensagem de erro "Argumento inválido. Função espera receber um array como argumento." deve ser retornada quando
  A função for chamada sem argumentos
  O argumento passado não for do tipo array
*/

function inverte_lista(array) {
  let index = array.length - 1;
  if (Array.isArray(array)) {
    do {
      console.log(array[index]);
      index--;
    } while (index >= 0);
    return;
  } else {
    return "Argumento inválido. Função espera receber um array como argumento.";
  }
}

// inverte_lista(["item 1", "item 2", "item 3"]);
