'use client'

import login from '@/actions/login'
import { useFormState, useFormStatus } from 'react-dom'
import Button from '../forms/button'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Entrar</Button>
      )}
    </>
  )
}

export function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  })

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" placeholder="senha" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  )
}
