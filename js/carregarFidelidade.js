function carregarClientes() {
    let clientesArray = JSON.parse(localStorage.getItem('clientesCadastrados')) || [];
    let tabelaClientes = document.getElementById('tabelaCorpo');
    tabelaClientes.innerHTML = '';

    for (let i = 0; i < clientesArray.length; i++) {
        let cliente = clientesArray[i];
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.dataNascimento}</td>
            <td>${cliente.dataCadastro}</td>
            <td>${cliente.dataVencimento}</td>
            <td>${cliente.pontos}</td>
        `;

        tabelaClientes.appendChild(row);
    };
};
document.addEventListener('DOMContentLoaded', carregarClientes);