import Image from 'next/image'
import styles from './animais.module.css'

type Animal = {
  id: number
  nome: string
  descricao: string
  imagem: string
}

export default async function AnimaisPage() {
  const response = await fetch('https://api.origamid.online/animais', {
    cache: 'no-cache',
  })
  const animais = (await response.json()) as Animal[]
  return (
    <main>
      <Image src="/imagens/dogs.svg" width={28} height={22} alt="Marca Dogs" />
      <Image
        src="/imagens/login.jpg"
        width={1200}
        height={1600}
        alt="Dogs"
        sizes="100vw"
        priority
      />
      <h1>Animais</h1>
      <ul className={styles.animais}>
        {animais.map((animal, i) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              src={animal.imagem}
              width={1200}
              height={800}
              alt={animal.descricao}
              quality={75}
              sizes="(max-width: 600px) 100vw, 50vw"
              // sizes="100vw"
              priority={i < 2}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
