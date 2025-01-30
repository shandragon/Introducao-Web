let logins = [];

logins["admin"] = "admin";
logins["user"] = "123456";
logins["root"] = "senha01";

let login = prompt("Digite seu login: ");
let password = prompt("Digite sua senha: ");

if (logins[login] === password) {
    document.write("<h2>Olá, " + login +"!</h2>");
} else {
    document.write("<h2>Login ou senha inválidos para " + login +"!</h2>");
}