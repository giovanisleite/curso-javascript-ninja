# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var vazia = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {nome: 'Giovani', sobrenome: 'Leite', sexo: 'Masculino', idade: 23, altura: 1.7, peso: 80, andando: false, caminhouQuantosMetros: 0}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function() {this.idade++}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
function andar(distanciaPercorrida) {
    this.caminhouQuantosMetros += distanciaPercorrida
    this.andando = true
}
pessoa.andar = andar
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
function parar(){
    this.andando = false
}
pessoa.parar = parar

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
function nomeCompleto(){
    return "Olá! Meu nome é " + this.nome + " " + this.sobrenome
}
pessoa.nomeCompleto = nomeCompleto

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
function mostrarIdade() {
    return "Olá, eu tenho " + this.idade + " anos!"
}
pessoa.mostrarIdade = mostrarIdade

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
function mostrarPeso() {
    return "Eu tenho " + this.peso + "Kg."
}
pessoa.mostrarPeso = mostrarPeso

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
function mostrarAltura() {
    return "Minha altura é " + this.altura + "m."
}
pessoa.mostrarAltura = mostrarAltura

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto() // 'Olá! Meu nome é Giovani Leite'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade() // 'Olá, eu tenho 24 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso() // 'Eu tenho 80Kg.'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura() // 'Minha altura é 1.7m.'

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
?
pessoa.mostrarIdade() // 'Olá, eu tenho 27 anos!'

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(10)
pessoa.andar(15)
pessoa.andar(25)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

pessoa.andando // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.andando // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros //50

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
function apresentacao() {
    var apresentaNome = "Olá, eu sou "
    if (pessoa.sexo == "Feminino") {
        apresentaNome += "a "
    } else {
        apresentaNome += "o "
    }

    var apresentaIdade = " ano"
    if (pessoa.idade > 1) {
        apresentaIdade += "s"
    }

    var apresentaDistanciaCaminhada = " metro"
    if (pessoa.caminhouQuantosMetros != 1) {
        apresentaDistanciaCaminhada += "s"
    }

    return apresentaNome + this.nome + " " + this.sobrenome + ", tenho " + this.idade + apresentaIdade + ", " + this.altura + "m, meu peso é " + this.peso + "kg e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + apresentaDistanciaCaminhada + "!";
}
pessoa.apresentacao = apresentacao

// Agora, apresente-se ;)
pessoa.apresentacao() // 'Olá, eu sou o Giovani Leite, tenho 27 anos, 1.7m, meu peso é 80kg e, só hoje, eu já caminhei 50 metros!'
```
