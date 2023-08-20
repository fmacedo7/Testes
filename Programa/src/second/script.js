const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    // Faz uma requisição AJAX para o arquivo PHP no servidor
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "frases.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                mensagem.textContent = xhr.responseText;
            } else {
                mensagem.textContent = "Erro ao carregar frase do servidor.";
            }
        }
    };
    xhr.send();
});
