import { Transacao } from "./transacao.js";

export type GrupoTransacao = {
  label: string;
  transacoes: Transacao[];
};
