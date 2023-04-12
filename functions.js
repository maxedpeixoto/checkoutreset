// Interação com a abas 
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// obtém a hora atual do computador
function mostrarHoraAtual() {
    const data = new Date();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const segundo = String(data.getSeconds()).padStart(2, '0');
    const horaAtual = `${hora}:${minuto}:${segundo}`;
    document.getElementById('hora-atual').innerText = horaAtual;
}
// Chama a função a cada segundo para atualizar a hora
setInterval(mostrarHoraAtual, 1000);

// obtém a Data atual do computador
function mostrarDataAtual() {
    let data = new Date();
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let dataFormatada = data.toLocaleDateString('pt-BR', options);
    document.getElementById('data-atual').innerHTML = dataFormatada;
}
// Chama a função a cada segundo para atualizar a data 
setInterval(mostrarDataAtual, 1000);

// Até aqui está tudo ok - NÃO MEXER //
const botao_comanda = document.querySelector("#botao_comanda");
const modal = document.querySelector("dialog");

botao_comanda.addEventListener("click", function () {
    modal.showModal()
});