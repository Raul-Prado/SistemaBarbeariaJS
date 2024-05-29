import {menssagemSucesso } from "../js/dialog.js";
let horariosAgendados = [];

export function agendarHorario(event){
    event.preventDefault();
    let nomeAgenda = document.getElementById("nomeCliente").value;
    let dataAgenda = document.getElementById("dataAgendamento").value;
    let horaAgenda = document.getElementById("horaAgendamento").value;

    let clientesAgendados = {
        "Cliente":nomeAgenda,
        "Data Marcada":dataAgenda,
        "Horário Marcado": horaAgenda
    }
    // Adiciona o cliente agendado ao array de horários agendados
    horariosAgendados.push(clientesAgendados);

     // Atualiza a lista de clientes
     atualizarAgenda();
     menssagemSucesso();
    // Reseta o formulário após o envio
    document.getElementById('form-agendamento').reset();
}
document.getElementById("form-agendamento").addEventListener("submit", agendarHorario);

export function atualizarAgenda(){
    let listaClientes = document.getElementById('lista-clientes');
    listaClientes.innerHTML = '';

    for (let agenda of horariosAgendados) {
        let listItem = document.createElement('li');
        listItem.textContent = `Cliente: ${agenda.Cliente} - Data: ${agenda["Data Marcada"]} - Horário: ${agenda["Horário Marcado"]}`;
        listaClientes.appendChild(listItem);
    };
};