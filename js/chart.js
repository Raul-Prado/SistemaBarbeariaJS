function atualizarGrafico(){
    
const ctx = document.getElementById('grafico');

let movimentacoes = ["Entradas", "Saidas", "Total"];
let valorEntrada = parseFloat(document.getElementById("entrada").innerText.replace('R$ ', '').replace(',', '.'));
let valorSaida = parseFloat(document.getElementById("saida").innerText.replace('R$ ', '').replace(',', '.'));
let valorTotal = parseFloat(document.getElementById("total").innerText.replace('R$ ', '').replace(',', '.'));

let valores = [valorEntrada, valorSaida, valorTotal];

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: movimentacoes,
    datasets: [{
        label: 'Total',
        data: valores,
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});
}
// Chamar a função após o carregamento completo da página
window.onload = atualizarGrafico;