let PF = "";
let bbd = "";
let dsrt = "";
let PFValor = 0;
let bbdValor = 0;
let dsrtValor = 0;
let resumo = "";

function verificarSelecao() {
    if(PF !== ""){
        if(bbd !== "") {
            if(dsrt !== "") {
                document.querySelector(".selecionar").classList.add("escondido")
                document.querySelector(".selecionado").classList.remove("escondido")
            }
        }
    }

}

function selecionarPF(item1) {
    PF = item1.innerHTML
    PFValor = document.querySelector(".preçoPF")
    const itemSelecionadoAntes = document.querySelector(".pratos .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
            itemSelecionadoAntes.classList.remove("bordas-seleção")
    }

    item1.classList.add("bordas-seleção");
    verificarSelecao();
}

function selecionarBebida(item2) {
    bbd = item2.innerHTML
    bbdValor = document.querySelector(".preçoBbd")
    const itemSelecionadoAntes = document.querySelector(".bebidas .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
            itemSelecionadoAntes.classList.remove("bordas-seleção")
    }

    item2.classList.add("bordas-seleção");
    verificarSelecao();
}

function selecionarSobremesa(item3) {
    dsrt = item3.innerHTML
    dsrtValor = document.querySelector("preçoDsrt")
    const itemSelecionadoAntes = document.querySelector(".sobremesas .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
            itemSelecionadoAntes.classList.remove("bordas-seleção")
    }

    item3.classList.add("bordas-seleção");
    verificarSelecao();
}


function atualizarResumo() {
    const resumoItens = document.getElementById("resumoItens");
    const totalPedido = document.getElementById("totalPedido");
    
    // Limpar conteúdo anterior
    resumoItens.innerHTML = "";

    // Adicionar itens selecionados ao resumo
    let total = 0;

    if (PF !== "") {
        const nomePF = document.querySelector(".pratos .bordas-seleção .nome-opção").textContent;
        const precoPF = parseFloat(document.querySelector(".pratos .bordas-seleção .preçoPF").textContent.replace(",", "."));
        resumoItens.innerHTML += `<p>${nomePF}: R$ ${precoPF.toFixed(2)}</p>`;
        total += precoPF;
    }

    if (bbd !== "") {
        const nomeBbd = document.querySelector(".bebidas .bordas-seleção .nome-opção").textContent;
        const precoBbd = parseFloat(document.querySelector(".bebidas .bordas-seleção .preçoBbd").textContent.replace(",", "."));
        resumoItens.innerHTML += `<p>${nomeBbd}: R$ ${precoBbd.toFixed(2)}</p>`;
        total += precoBbd;
    }

    if (dsrt !== "") {
        const nomeDsrt = document.querySelector(".sobremesas .bordas-seleção .nome-opção").textContent;
        const precoDsrt = parseFloat(document.querySelector(".sobremesas .bordas-seleção .preçoDsrt").textContent.replace(",", "."));
        resumoItens.innerHTML += `<p>${nomeDsrt}: R$ ${precoDsrt.toFixed(2)}</p>`;
        total += precoDsrt;
    }

    // Exibir o total
    totalPedido.textContent = total.toFixed(2);
}

// Função para selecionar o prato
function selecionarPF(item1) {
    PF = item1.innerHTML;
    PFValor = parseFloat(item1.querySelector(".preçoPF").textContent.replace(",", "."));
    const itemSelecionadoAntes = document.querySelector(".pratos .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
        itemSelecionadoAntes.classList.remove("bordas-seleção");
    }

    item1.classList.add("bordas-seleção");
    verificarSelecao();
    atualizarResumo();
}

// Função para selecionar a bebida
function selecionarBebida(item2) {
    bbd = item2.innerHTML;
    bbdValor = parseFloat(item2.querySelector(".preçoBbd").textContent.replace(",", "."));
    const itemSelecionadoAntes = document.querySelector(".bebidas .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
        itemSelecionadoAntes.classList.remove("bordas-seleção");
    }

    item2.classList.add("bordas-seleção");
    verificarSelecao();
    atualizarResumo();
}

// Função para selecionar a sobremesa
function selecionarSobremesa(item3) {
    dsrt = item3.innerHTML;
    dsrtValor = parseFloat(item3.querySelector(".preçoDsrt").textContent.replace(",", "."));
    const itemSelecionadoAntes = document.querySelector(".sobremesas .bordas-seleção");

    if (itemSelecionadoAntes !== null) {
        itemSelecionadoAntes.classList.remove("bordas-seleção");
    }

    item3.classList.add("bordas-seleção");
    verificarSelecao();
    atualizarResumo();
}

// Função para mostrar o resumo ao clicar no botão de "Fechar Pedido"
function retaFinal(fim) {
    const fecharPedido = document.querySelector(".finalizacao");
    if (fecharPedido !== null) {
        fecharPedido.classList.remove("escondido");
    }
    atualizarResumo();  // Atualizar o resumo na hora que o pop-up aparecer
}

