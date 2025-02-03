function validarCPF() {
    let cpf = document.getElementById('cpf').value;
    if (!verificarCPF(cpf)) {
        alert('Número do CPF invalido!');
        document.getElementById('cpf').value = '';
    }
}

function verificarCPF(cpf) {
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais
    for (var i = 0; i < 10; i++) {
        if (cpf.charAt(i) !== cpf.charAt(i + 1)) break;
        if (i === 9)  return false;
    }

    let soma = 0;
    for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    let resto = soma % 11;
    if (resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (var i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = soma % 11;

    if (resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

function selecioneMunicipio() {
    let estado = document.getElementById("estado").value;

    let municipioElement = document.getElementById("municipio");
    removeOptions(municipioElement);
    addOption(municipioElement, "-", "-");
    switch (estado) {
        case "bahia":
            addOption(municipioElement, "salvador", "Salvador");
            addOption(municipioElement, "feira_santana", "Feira de Santana");
            break;
        case "sao_paulo":
            addOption(municipioElement, "sao_paulo", "São Paulo");
            addOption(municipioElement, "adamantina", "Adamantina");
            break;
        case "rio_janeiro":
            addOption(municipioElement, "rio_janeiro", "Rio de Janeiro");
            addOption(municipioElement, "niteroi", "Niterói");
            break;
        case "tocantins":
            addOption(municipioElement, "palmas", "Palmas");
            addOption(municipioElement, "araguaina", "Araguaína");
            break;
        default:
            break;
    }
}

function removeOptions(selectElement) {
    for(let i = (selectElement.options.length - 1); i >= 0; i--) {
       selectElement.remove(i);
    }
}

function addOption(selectElement, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

function aoCarregar() {
    setInterval(verificarObrigatorios, 1000);
}

function verificarObrigatorios() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;

    // Falsy value
    if (!nome || !cpf) {
        document.getElementById("btEnviar").disabled = true;
    } else {
        document.getElementById("btEnviar").disabled = false;
    }
}

function dadosRecebidos() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nome').value = urlParams.get('nome');
    document.getElementById('nomeMae').value = urlParams.get('nomeMae');
    document.getElementById('nomePai').value = urlParams.get('nomePai');
    document.getElementById('email').value = urlParams.get('email');
    document.getElementById('cpf').value = urlParams.get('cpf');
    document.getElementById('estadoCivil').value = urlParams.get('estadoCivil');
    document.getElementById('estado').value = urlParams.get('estado');
    document.getElementById('municipio').value = urlParams.get('municipio');
}