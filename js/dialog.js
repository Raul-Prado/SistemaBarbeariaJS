// exporta função para poder chamar
export function menssagemAlerta(){
    let dialog = document.querySelector(".alerta");
    // let dialog = document.getElementsByTagName("dialog")[0];
    let ocultarDialog = dialog.querySelector(".btn-fechar");

    if(dialog){
        dialog.open=true;
        //temporizado para fechar automatico
        setTimeout(function(){
            dialog.close();
        }, 3000)
    }

    if(ocultarDialog){
        // Adiciona um evento de clique ao botão de fechar
        ocultarDialog.addEventListener('click', function() {
            // Oculta o botão de fechar quando for clicado
            dialog.style.display = "none";
        });
    }
}
// exporta função para poder chamar
export function menssagemSucesso(){
    let dialog = document.querySelector(".sucesso");
    // let dialog = document.getElementsByTagName("dialog")[0];
    let ocultarDialog = dialog.querySelector(".btn-fechar");

    if(dialog){
        dialog.open=true;
        //temporizado para fechar automatico
        setTimeout(function(){
            dialog.close();
        }, 3000)
    }

    if(ocultarDialog){
        // Adiciona um evento de clique ao botão de fechar
        ocultarDialog.addEventListener('click', function() {
            // Oculta o botão de fechar quando for clicado
            dialog.style.display = "none";
        });
    }
}
