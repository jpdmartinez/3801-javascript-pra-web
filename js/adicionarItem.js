import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento){
    evento.preventDefault();

    //Função para criar item da lista
    const itemDaLista = criarItemDaLista(item.value);

    //Adiciona a lista no espaço correto.
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
}