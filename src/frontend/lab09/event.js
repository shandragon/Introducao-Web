function adicionarLivro() {
    let livro = prompt('Digite o nome do livro:');
    let element = document.getElementById('livros');
    element.innerHTML += `<li>${livro}</li>`;
}

function limparLivros() {
    let element = document.getElementById('livros');
    element.innerHTML = '<h2>Livros:</h2><p>Nenhuma informação disponível.</p>';
}

let filmes = [];
function adicionarFilme() {
    let filme = document.getElementById('input-filme').value;
    let element = document.getElementById('filmes');
    filmes.push(filme);

    element.innerHTML = '<h2>Filmes:</h2>';
    filmes.forEach(e => {
        element.innerHTML += `<li>${e}</li>`;
    });
}

function removerFilme() {
    let filme = document.getElementById('input-filme-2').value;
    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i] === filme) {
            filmes.splice(i, 1);
            break;
        }
    }

    let element = document.getElementById('filmes');
    element.innerHTML = '<h2>Filmes:</h2>';
    filmes.forEach(e => {
        element.innerHTML += `<li>${e}</li>`;
    });
}

function limparFilmes() {
    filmes = [];

    let element = document.getElementById('filmes');
    element.innerHTML = '<h2>Filmes:</h2><p>Nenhuma informação disponível.</p>';
}

function imprimirMensagem() {
    let msg = document.getElementById('input-mensagem').value;
    document.getElementById('mensagem').innerHTML = msg;
}

function imprimirMensagem2() {
    let msg = document.getElementById('input-mensagem-2').value;
    document.getElementById('mensagem').innerHTML = msg;
}