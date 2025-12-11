'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

export default function Menu() {
  const params = useParams()
  const pathname = usePathname()

  React.useEffect(() => {
    console.log('Rota mudou')
  }, [pathname])

  console.log(pathname)
  return (
    <>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/acoes">Ações: {params.acao}</Link>
        </li>
      </ul>
    </>
  )
}
