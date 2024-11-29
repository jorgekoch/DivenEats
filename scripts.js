let PF = "";
let bbd = "";
let dsrt = "";
let PFValor = 0;
let bbdValor = 0;
let dsrtValor = 0;

function verificarSelecao() {
    if (PF !== "" && bbd !== "" && dsrt !== "") {
        document.querySelector(".selecionar").classList.add("escondido");
        document.querySelector(".selecionado").classList.remove("escondido");
    }
}

function selecionarPF(item1) {
    PF = item1.innerHTML;
    PFValor = parseFloat(item1.querySelector(".preçoPF").textContent.replace(",", "."));
    const itemSelecionadoAntes = document.querySelector(".pratos .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
        itemSelecionadoAntes.classList.remove("bordas-seleção");
    }

    item1.classList.add("bordas-seleção");
    verificarSelecao();
}

function selecionarBebida(item2) {
    bbd = item2.innerHTML;
    bbdValor = parseFloat(item2.querySelector(".preçoBbd").textContent.replace(",", "."));
    const itemSelecionadoAntes = document.querySelector(".bebidas .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
        itemSelecionadoAntes.classList.remove("bordas-seleção");
    }

    item2.classList.add("bordas-seleção");
    verificarSelecao();
}

function selecionarSobremesa(item3) {
    dsrt = item3.innerHTML;
    dsrtValor = parseFloat(item3.querySelector(".preçoDsrt").textContent.replace(",", "."));
    const itemSelecionadoAntes = document.querySelector(".sobremesas .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
        itemSelecionadoAntes.classList.remove("bordas-seleção");
    }

    item3.classList.add("bordas-seleção");
    verificarSelecao();
}

function atualizarResumo() {
    const resumoItens = document.getElementById("resumoItens");
    const totalPedido = document.getElementById("totalPedido");

    resumoItens.innerHTML = ""; 
    let total = 0;

    if (PF !== "") {
        const nomePF = document.querySelector(".pratos .bordas-seleção .nome-opção").textContent;
        const precoPF = PFValor;
        resumoItens.innerHTML += `<p>${nomePF}: R$ ${precoPF.toFixed(2)}</p>`;
        total += precoPF;
    }

    if (bbd !== "") {
        const nomeBbd = document.querySelector(".bebidas .bordas-seleção .nome-opção").textContent;
        const precoBbd = bbdValor;
        resumoItens.innerHTML += `<p>${nomeBbd}: R$ ${precoBbd.toFixed(2)}</p>`;
        total += precoBbd;
    }

    if (dsrt !== "") {
        const nomeDsrt = document.querySelector(".sobremesas .bordas-seleção .nome-opção").textContent;
        const precoDsrt = dsrtValor;
        resumoItens.innerHTML += `<p>${nomeDsrt}: R$ ${precoDsrt.toFixed(2)}</p>`;
        total += precoDsrt;
    }

    totalPedido.textContent = total.toFixed(2);
}


function retaFinal() {
    const fecharPedido = document.querySelector(".finalizacao");
    if (fecharPedido !== null) {
        fecharPedido.classList.remove("escondido");
    }
    atualizarResumo();
}

function finalizarPedido() {
    let mensagem = "Olá, gostaria de fazer o pedido:\n";

    if (PF !== "") {
        const nomePF = document.querySelector(".pratos .bordas-seleção .nome-opção").textContent;
        const precoPF = PFValor.toFixed(2);
        mensagem += `- ${nomePF}: R$ ${precoPF}\n`;
    }

    if (bbd !== "") {
        const nomeBbd = document.querySelector(".bebidas .bordas-seleção .nome-opção").textContent;
        const precoBbd = bbdValor.toFixed(2);
        mensagem += `- ${nomeBbd}: R$ ${precoBbd}\n`;
    }

    if (dsrt !== "") {
        const nomeDsrt = document.querySelector(".sobremesas .bordas-seleção .nome-opção").textContent;
        const precoDsrt = dsrtValor.toFixed(2);
        mensagem += `- ${nomeDsrt}: R$ ${precoDsrt}\n`;
    }

    const total = (PFValor + bbdValor + dsrtValor).toFixed(2);
    mensagem += `Total: R$ ${total}\n`;

    const mensagemCodificada = encodeURIComponent(mensagem);

    const numeroRestaurante = '5547999632405';  
    const urlWhatsApp = `https://wa.me/${numeroRestaurante}?text=${mensagemCodificada}`;

    window.open(urlWhatsApp, '_blank');
}


function cancelarPedido() {
    const fecharPedido = document.querySelector(".finalizacao");
    if (fecharPedido !== null) {
        fecharPedido.classList.add("escondido");
    }
}