window.onload = function() {
    var login = prompt("Digite seu login: ");
    var password = prompt("Digite sua senha: ");

    if (login === "admin" && password === "admin") {
        document.getElementById("mensagem").innerHTML =  "<h2>Olá, " + login +"!</h2>";
    } else {
        document.getElementById("mensagem").innerHTML =  "<h2>Login ou senha inválidos para " + login +"!</h2>";
    }
};

