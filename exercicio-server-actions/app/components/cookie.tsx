'use client'

import React from 'react'
import { getCookie } from '../../actions/get-cookie'

export default function Cookie() {
  const [token, setToken] = React.useState('')
  async function handleClick() {
    console.log('cookie')
    const token = await getCookie('token')
    if (token) setToken(token)
  }

  return (
    <div>
      <h2>Cookie: {token}</h2>
      <button onClick={handleClick}>Pegar Cookie</button>
    </div>
  )
}
