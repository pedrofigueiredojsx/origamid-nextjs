import Atualizar from '@/components/atualizar'

type Acao = {
  nome: string
  preco: number
  atualizada: string
}

type PageParams = {
  params: Promise<{ acao: string }>
}

export const revalidate = 5

export default async function AcaoPage({ params }: PageParams) {
  // Await params antes de usar
  const resolvedParams = await params
  console.log(resolvedParams)

  const response = await fetch(
    `https://api.origamid.online/acoes/${resolvedParams.acao}`,
    {
      next: {
        revalidate: 5,
      },
    }
  )

  const acao = (await response.json()) as Acao

  return (
    <main>
      <h1>Ações</h1>
      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  )
}
