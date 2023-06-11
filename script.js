alert(`Só vai aparecer o Botão de Logar se Cumprir esses requisitos:
      * Entre 6 e 8 caracteres
      * Pelo menos 2 caracteres especiais
      * Um caractere em maiúscula e outro em minúscula
      * Pelo menos 1 número`)

let botao = document.getElementById("botao");

/*Variaveis da senha*/ 
let senha2 = document.getElementById("senha");
let senhaValida;
let senha;

senha2.addEventListener("input", () => {
    senha = senha2.value;

    if (senha.length === 6 || senha.length === 7 || senha.length === 8) {
        let regex = /^(?=(?:[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){2})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
        senhaValida = regex.test(senha);

        if (senhaValida === true) {
            botao.style.display = "block";
            console.log("true");
        } else if (senhaValida === false) {
            botao.style.display = "none";
            console.log("false");
        }

    }

});

