function adicionarLivro() {
    let livro = prompt('Digite o nome do livro:');
    let element = document.getElementById('livros');
    element.innerHTML += `<li>${livro}</li>`;
}

function limparLivros() {
    let element = document.getElementById('livros');
    element.innerHTML = '<h2>Livros:</h2><p id="livro">Nenhuma informação disponível.</p>';
}