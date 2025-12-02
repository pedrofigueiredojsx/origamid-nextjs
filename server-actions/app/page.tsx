'use client'

import React from 'react'
import { setCookie } from '../actions/set-cookie'

export default function Home() {
  const [valor, setValor] = React.useState('')

  async function handleClick() {
    console.log('teste')
    const response = await setCookie('segredo', '12345')
    setValor(response.value)
    console.log(response)
  }

  return (
    <main>
      <h1>Home: {valor}</h1>
      <button onClick={handleClick}>Deifinir Cookie</button>
    </main>
  )
}
