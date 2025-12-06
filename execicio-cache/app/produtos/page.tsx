export type Produto = {
  id?: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: 0 | 1
}

export default async function ProdutosPage() {
  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 5,
    },
  })
  const produtos = (await response.json()) as Produto[]

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome}: {produto.preco}
          </li>
        ))}
      </ul>
    </main>
  )
}
