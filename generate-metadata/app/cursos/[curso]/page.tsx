import Link from 'next/link'
import { getCurso, getCursos } from '../../../api/cursos'
import { Metadata } from 'next'

type PageParams = {
  params: Promise<{
    curso: string
  }>
}

export async function generateStaticParams() {
  const cursos = await getCursos()

  return cursos.map((curso) => ({
    curso: curso.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { curso: cursoSlug } = await params
  const curso = await getCurso(cursoSlug)
  return {
    title: curso.nome,
    description: curso.descricao,
  }
}

export default async function CursoPage({ params }: PageParams) {
  const { curso: cursoSlug } = await params
  const curso = await getCurso(cursoSlug)
  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total Horas: {curso.total_horas}</p>
      <p>Total Aulas: {curso.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${cursoSlug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
