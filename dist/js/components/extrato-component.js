import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";
const elementoregistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoregistroTransacoesExtrato.innerHTML = "";
    let htmlregistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
        <div class="transacao-item">
            <div class="transacao-info">
                <span class="tipo">${transacao.tipoTransacao}</span>
                <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
            </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
        </div>`;
        }
        htmlregistroTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label.toUpperCase()}</strong>
            ${htmlTransacaoItem}
        </div>
    `;
    }
    if (htmlregistroTransacoes === "") {
        htmlregistroTransacoes = `<div>Não há transaçoes registradas!</div>`;
    }
    elementoregistroTransacoesExtrato.innerHTML = htmlregistroTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    },
};
export default ExtratoComponent;
