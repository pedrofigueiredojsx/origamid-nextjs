import Link from 'next/link'
import { Aula, getAula, getCurso, getCursos } from '../../../../api/cursos'

type PageParams = {
  params: Promise<{
    curso: string
    aula: string
  }>
}

export async function generateStaticParams() {
  const cursos = await getCursos()
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)))
  return aulas
    .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
    .map((aula) => ({
      curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
      aula: aula.slug,
    }))
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
