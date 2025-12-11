import Atualizar from '@/components/atualizar'

type Acao = {
  nome: string
  preco: number
  atualizada: string
}

export const revalidate = 5

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      revalidate: 5,
    },
  })

  const acao = (await response.json()) as Acao

  return (
    <main>
      <h1>Acoes</h1>
      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  )
}
