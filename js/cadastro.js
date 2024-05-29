import { menssagemAlerta, menssagemSucesso } from "../js/dialog.js";

export function cadastroLogin(event){
    event.preventDefault();// Impede o envio do formulário para a página de destino

    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('passwordEmail').value;

    if(sessionStorage.getItem("userEmail")){
        menssagemAlerta();
    }else{
        sessionStorage.setItem("userEmail", email);
        sessionStorage.setItem("userSenha", senha);

        // let getEmail = sessionStorage.getItem("userEmail");
        // let getSenha = sessionStorage.getItem("userSenha");
    
        // console.log("Stored email:", getEmail); // Debug log
        // console.log("Stored password:", getSenha); // Debug log
        setTimeout(function(){
            menssagemSucesso();
                setTimeout(function(){
                    window.location.href="/admin.html";
                }, 1000);
        }, 4000);
    }

}
document.getElementById('cadastroForm').addEventListener('submit', cadastroLogin); //pega o evento submit e chama a função