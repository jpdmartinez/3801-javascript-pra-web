const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault();

    //Cria os elementos li e div. Adiciona a classe na div.
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    //cria uma nova div, o parágrafo do texto e pega o seu valor.
    const containerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;

    // Adiciona o valor do texto dentro do elemento div
    containerNomeDoItem.appendChild(nomeDoItem);

    //Cria uma nova div, para os botões e adiciona a classe.
    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    //Cria o elemento img e atribui texto alternativo e imagem para ele.
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    //Cria uma nova div, para os botões e adiciona a classe.
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    //Cria o elemento img e atribui texto alternativo e imagem para ele.
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    //Adiciona todos os novos elementos dentro da div dos botões
    botaoRemover.appendChild(imagemRemover);
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    //Adiciona os botões e o texto na div da lista.
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    //Adiciona a div dentro da lista de itens
    itemDaLista.appendChild(containerItemLista);

    //Adiciona a lista no espaço correto.
    listaDeCompras.appendChild(itemDaLista);
}