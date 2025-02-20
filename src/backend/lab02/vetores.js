// Definindo um vetor de números
const numeros = [1, 2, 3, 4, 5];

// Acessando elementos do vetor
console.log('Primeiro elemento:', numeros[0]);
console.log('Terceiro elemento:', numeros[2]);

// Adicionando um elemento ao final do vetor
numeros.push(6);
console.log('Vetor após adicionar um elemento:', numeros);

// Removendo o último elemento do vetor
const ultimoElemento = numeros.pop();
console.log('Elemento removido:', ultimoElemento);
console.log('Vetor após remover o último elemento:', numeros);

// Iterando sobre os elementos do vetor
console.log('Iterando sobre os elementos do vetor:');
numeros.forEach((numero, index) => {
    console.log(`Elemento no índice ${index}: ${numero}`);
});

// Definindo um vetor de filmes
const filmes = ['Inception', 'The Matrix', 'Interstellar', 'Lord of the Rings'];

// Adicionando um elemento ao início do vetor
filmes.unshift('The Godfather');
console.log('Vetor de filmes após adicionar um elemento ao início:', filmes);

// Removendo o primeiro elemento do vetor
const primeiro = filmes.shift();
console.log('Primeiro filme removido:', primeiro);
console.log('Vetor de filmes após remover o primeiro elemento:', filmes);

// Encontrando o índice de um elemento
const indice = filmes.indexOf('The Matrix');
console.log('Índice de The Matrix:', indice);

// Verificando se um elemento está no vetor
const temInception = filmes.includes('Inception');
console.log('O vetor de filmes contém Inception?', temInception);

// Iterando sobre os elementos do vetor
console.log('Iterando sobre os elementos do vetor:');
filmes.forEach((filme, index) => {
    console.log(`Elemento no índice ${index}: ${filme}`);
});