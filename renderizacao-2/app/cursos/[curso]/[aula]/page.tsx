import Link from 'next/link'
import { getAula } from '../../../../api/cursos'

type PageParams = {
  params: Promise<{
    curso: string
    aula: string
  }>
}

export default async function AulaPage({ params }: PageParams) {
  const { curso, aula } = await params
  const singleAula = await getAula(curso, aula)

  return (
    <main>
      <Link href={`/cursos/${curso}`}>{curso}</Link>
      <h1>{singleAula.nome}</h1>
      <p>{singleAula.descricao}</p>
      <p>Tempo: {singleAula.tempo}</p>
    </main>
  )
}
