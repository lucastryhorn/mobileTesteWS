import React from 'react'
import CardUser from './CardUser'
import CardLocal from './CardLocal'
import CardOportunidade from './CardOportunidades'
import CardLimiteCredito from './CardLimiteCredito'
import CardVendas from './CardVendas'
import CardTitulosFinanceiros from './CardTitulosFinanceiros'
import { dataOportunidades } from './CardOportunidades/config'

const res = dataOportunidades.reduce(function(acc, obj) {
  return acc + obj.qnt
}, 0)

export const data = [
  { titulo: 'Informações Gerais', children: <CardUser /> },
  { titulo: 'Local', children: <CardLocal /> },
  {
    titulo: `Oportunidades ( ${res} )`,
    children: <CardOportunidade />,
  },
  { titulo: 'Limite de Crédito', children: <CardLimiteCredito /> },
  { titulo: 'Vendas', children: <CardVendas /> },
  { titulo: 'Titulos financeiros', children: <CardTitulosFinanceiros /> },
]
