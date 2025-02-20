console.log("Testando valores falsy e truthy");
console.log(false, ` é "${Boolean(false)}".`); // falsy
console.log(0,  ` é "${Boolean(0)}".`); // falsy
console.log("",  ` é "${Boolean("")}".`); // falsy
console.log(null,  ` é "${Boolean(null)}".`); // falsy
console.log(undefined,  ` é "${Boolean(undefined)}".`); // falsy
console.log(NaN,  ` é "${Boolean(NaN)}".`); // falsy

console.log(true, Boolean(true)); // truthy
console.log(1, Boolean(1)); // truthy
console.log("Olá", Boolean("Olá")); // truthy
console.log([], Boolean([])); // truthy
console.log({}, Boolean({})); // truthy

console.log("Testando comparações");
console.log(1 == 1);       // true (mesmo valor)
console.log(1 == "1");     // true (conversão implícita de string para número)
console.log(1 === 1);      // true (mesmo valor e tipo)
console.log(1 === "1");    // false (tipos diferentes: número vs. string)
console.log(true == 1);    // true (true é convertido para 1 antes da comparação)
console.log(1 == [1]);     // true (o array é convertido para número, resultando em 1)
console.log(null == null); // true (null sempre é igual a null)
console.log(null == undefined); // true (null e undefined são considerados iguais com `==`)
console.log([] == false);  // true (array vazio é convertido para string "", que equivale a 0, e 0 == false)
console.log([] == []);     // false (arrays são objetos e a comparação de objetos verifica referência na memória, não valores)


console.log("Testando operadores de comparação");
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}.`);
} else if (num1 < num2) {
    console.log(`${num1} é menor que ${num2}.`);
} else {
    console.log(`${num1} é igual a ${num2}.`);
}

console.log("Testando operador lógico AND (&&)");
let idade = 25;
let possuiCNH = true;

if (idade >= 18 && possuiCNH) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

console.log("Testando operador lógico OR (||)");
let temDinheiro = false;
let temCartaoDeCredito = true;

if (temDinheiro || temCartaoDeCredito) {
    console.log("Você pode fazer a compra.");
} else {
    console.log("Você não pode fazer a compra.");
}

console.log("Testando a combinação dos operadores lógicos AND e OR");
let estaChovendo = true;
let temGuardaChuva = false;
let temCapaDeChuva = false;

// Verifica se a pessoa pode sair de casa
if ((estaChovendo && (temGuardaChuva || temCapaDeChuva)) || !estaChovendo) {
    console.log("Você pode sair de casa.");
} else {
    console.log("Você não pode sair de casa.");
}