/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [1, 2, 3, 4, "a"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arr(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arr(qualquer)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function valorNaPosicao(array, posicao) {
  return array[posicao];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = [2, "a", false, [1, 2], { nome: "Toposoro" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (var i = 0; i < valores.length; i++) valorNaPosicao(valores, i);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(tituloLivro) {
  var livros = {
    guerraDosTronos: {
      quantidadedePaginas: 3000,
      autor: "George Martin",
      editora: "Leya"
    },
    senhorDosAneis: {
      quantidadedePaginas: 2500,
      autor: "Tolkien",
      editora: "Cia das Letras"
    },
    livroQualquer: {
      quantidadedePaginas: 100,
      autor: "Fulano Lá",
      editor: "hasihdsu iusahd"
    }
  };

  if (!!tituloLivro) return livros[tituloLivro];
  return livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  `O livro Guerra dos tronos tem ${
    book("guerraDosTronos").quantidadedePaginas
  } páginas`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  `O autor do livro Guerra dos tronos é ${book("guerraDosTronos").autor}`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro Guerra dos Tronos foi publicado pela editora ${
    book("guerraDosTronos").editora
  }.`
);
