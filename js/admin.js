// importanto função para usar
import {menssagemAlerta, menssagemSucesso} from './dialog.js';

function Login(event){
    event.preventDefault();
    let email = document.getElementById('login').value;
    let senha = document.getElementById('password').value;

    let getEmail = sessionStorage.getItem("userEmail");
    let getSenha = sessionStorage.getItem("userSenha");

    console.log("Stored email:", getEmail); // Debug log
    console.log("Stored password:", getSenha); // Debug log

    if(email === getEmail && senha === getSenha){
        // alert("Liberado");
        // window.location.href="/admin.html";
        setTimeout(function(){
            menssagemSucesso();
                setTimeout(function(){
                    window.location.href="/template/index.html";
                }, 1000);
        }, 4000);
    }else{
        // alert("nao esta cadastro");
        menssagemAlerta();
    } 
}
document.getElementById('adminForm').addEventListener('submit', Login);