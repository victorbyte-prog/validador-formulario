document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    document.getElementById("erroNome").innerText = "";
    document.getElementById("erroEmail").innerText = "";
    document.getElementById("erroSenha").innerText = "";

    let valido = true;

    if (nome === "") {
        document.getElementById("erroNome").innerText = "Informe seu nome";
        valido = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("erroEmail").innerText = "Email inválido";
        valido = false;
    }

    if (senha.length < 6) {
        document.getElementById("erroSenha").innerText = "Senha precisa ter 6 caracteres";
        valido = false;
    }

    if (valido) {
        alert("Formulário enviado com sucesso!");
    }
});
