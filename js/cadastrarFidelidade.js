import {menssagemSucesso } from "../js/dialog.js";

let clientesArray = JSON.parse(localStorage.getItem('clientesCadastrados')) || [];

export function cadastrarFidelidade(event){
    event.preventDefault();// Impede o envio do formulário para a página de destino
    let nomeFidelidade = document.getElementById("nomeFidelidade").value;
    let emailFidelidade = document.getElementById("emailFidelidade").value;
    let telefoneFidelidade = document.getElementById("telFidelidade").value;
    let dtnascimentoFidelidade = document.getElementById("dtNascimentoFidelidade").value;
    let dtcadastroFidelidade = document.getElementById("dtCadastroFidelidade").value;
    let dtvencimentoFidelidade = document.getElementById("dtVencimentoFidelidade").value;

    //objeto para amazenar os dados
    let clientesObjeto = {
        "nome": nomeFidelidade,
        "email": emailFidelidade,
        "telefone": telefoneFidelidade,
        "dataNascimento": dtnascimentoFidelidade,
        "dataCadastro": dtcadastroFidelidade,
        "dataVencimento": dtvencimentoFidelidade
    };

    // Adiciona o objeto clientesObjeto ao array clientesArray
    clientesArray.push(clientesObjeto);
    localStorage.setItem('clientesCadastrados', JSON.stringify(clientesArray));
    
    //importa função dialog
    menssagemSucesso();
    // Reseta o formulário após o envio
    document.getElementById('form-cadastro').reset();
}
document.getElementById('form-cadastro').addEventListener("submit", cadastrarFidelidade);