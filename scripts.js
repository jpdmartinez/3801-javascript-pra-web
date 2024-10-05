const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault();

    //Cria os elementos li e div. Adiciona a classe na div.
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    //cria uma nova div, o parágrafo do texto e pega o seu valor.
    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    //Criando o checkbox
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    //id variável do checkbox
    checkboxInput.id = "checkbox-" + contador++;

    //cria a label do checkbox
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento){
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked){
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    })

    //cria o checkbox customizado
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    //adiciona o input e o checkbox customizado dentro da label
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    //adiciona a label dentro do container e o container checkbox dentro do container Nome do Item
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    //cria o nome do item novo.
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
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