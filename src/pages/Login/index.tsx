import { Footer, Input } from "../../components"
import Link from "../../components/Link"

export const Login = () => {
  return (
    <div className="commonPage">
      <div className="commonContainer">
        <aside className="commonAside">
          <img src="/login-image.svg" alt="" />
        </aside>
        <main className="commonMain">
          <h1>Controle financeiro</h1>
          <form className="commonForm">
            <h2>Acesse sua conta</h2>
            <Input label="E-mail: " type="email" placeholder="Digite aqui o seu e-mail" />
            <Input label="Senha: " type="password" placeholder="Digite aqui a sua senha" />
            <Link href="/dashboard"><button>Entrar</button></Link>
          </form>
          <Link href="/register">Não tem uma conta? Crie a sua agora clicando aqui.</Link>
        </main>
      </div>
      <Footer />
    </div>
  )
}
