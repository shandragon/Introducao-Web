function saudacao() {
    console.log("Função simples que exibe uma mensagem no console");
}

// Chamando a função
saudacao();

// Função que recebe dois parâmetros e exibe a soma deles
function somar(a, b) {
    console.log("A soma é:", a + b);
}
somar(5, 3);

// Função que recebe dois parâmetros e retorna a soma deles
function somarRetorno(a, b) {
    return a + b;
}
let resultado = somarRetorno(5, 3);
console.log("O retorno da soma é:", resultado);

// Função anônima atribuída a uma variável
let somarAnonimo = function(a, b) {
    console.log("A soma da função anônima:", a + b);
};
somarAnonimo(5, 3);

// Arrow Function que recebe dois parâmetros e retorna a soma deles
let somarArrow = (a, b) => a + b;
resultado = somarArrow(5, 3);
console.log("O retorno da arrow function da soma é:", resultado);

// Função recursiva que calcula o fatorial de um número
function fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
let numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}.`);

// Função callback
let vetor = [10, 20, 30, 40, 50];

function exibirElemento(elemento, indice) {
    console.log(`Elemento no índice ${indice}: ${elemento}`);
}

function processarCallback(v, callback) {
    console.log("Processando callback dentro da função forEach");
    v.forEach(callback);
}

processarCallback(vetor, exibirElemento);

// Arrow Function como callback
vetor.forEach((elemento, indice) => {
    console.log(`Arrow function exibindo elemento no índice ${indice}: ${elemento}`);
});