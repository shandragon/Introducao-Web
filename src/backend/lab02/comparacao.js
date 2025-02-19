// Testando valores falsy e truthy
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


// Testando operadores de comparação
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    return `${num1} é maior que ${num2}.`;
} else if (num1 < num2) {
    return `${num1} é menor que ${num2}.`;
} else {
    return `${num1} é igual a ${num2}.`;
}