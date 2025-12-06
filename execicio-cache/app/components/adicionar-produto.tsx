'use client'

import { adicionarProduto } from '@/actions/adicionar-produto'
import { Produto } from '@/produtos/page'
import React from 'react'

export default function AdicionarProduto() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data: Produto = {
      nome: event.currentTarget.nome.value,
      descricao: event.currentTarget.descricao.value,
      preco: Number(event.currentTarget.preco.value),
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.checked ? 1 : 0,
    }
    await adicionarProduto(data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" />
      <label htmlFor="preco">Preço</label>
      <input type="number" name="preco" id="preco" />
      <label htmlFor="descricao">Descrição</label>
      <input type="text" name="descricao" id="descricao" />
      <label htmlFor="estoque">Estoque</label>
      <input type="number" name="estoque" id="estoque" />
      <label htmlFor="importado">
        <input type="checkbox" name="importado" id="importado" />
        Importado
      </label>
      <button type="submit">Adicionar</button>
    </form>
  )
}
