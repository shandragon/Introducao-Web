var login = prompt("Digite seu login: ");
var password = prompt("Digite sua senha: ");

if (login === "admin" && password === "admin") {
    document.write("<h2>Olá, " + login +"!</h2>");
} else {
    document.write("<h2>Login ou senha inválidos para " + login +"!</h2>");
}