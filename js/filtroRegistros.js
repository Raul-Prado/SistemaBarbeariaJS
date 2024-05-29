function filtrarRegistros(){
    let campoPesquisa = document.getElementById('filtro').value.toLowerCase();
    let registrosTabela = document.querySelectorAll('#tabelaRegistros tbody tr');

    // Loop através das linhas da tabela e mostra ou esconde com base na pesquisa
    registrosTabela.forEach(row => {
        // Verifica se o texto da linha inclui o texto da pesquisa
        const match = row.textContent.toLowerCase().includes(campoPesquisa);
        // Mostra ou esconde a linha
        row.style.display = match ? '' : 'none';
    });

}