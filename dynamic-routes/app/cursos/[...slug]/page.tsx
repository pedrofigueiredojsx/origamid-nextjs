type PageParams = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function CursosPage({ params }: PageParams) {
  const { slug } = await params
  console.log(slug)
  return (
    <main>
      <h1>Cursos</h1>
      {slug.join('/')}
    </main>
  )
}
