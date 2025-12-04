import { cookies } from 'next/headers'
import Link from 'next/link'

type Conta = {
  usuario: string
}

export default async function Menu() {
  let conta: Conta | null = null

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    if (token) {
      const response = await fetch('https://api.origamid.online/conta/perfil', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        cache: 'no-store',
      })

      if (response.ok) {
        conta = await response.json()
      }
    }
  } catch (error) {
    console.error('Erro ao buscar perfil:', error)
  }

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        {conta?.usuario ? (
          <span>{conta.usuario}</span>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
    </ul>
  )
}