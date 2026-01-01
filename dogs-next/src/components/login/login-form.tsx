import login from '@/actions/login'

export async function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" placeholder="senha" />
        <button>Entrar</button>
      </form>
    </>
  )
}
