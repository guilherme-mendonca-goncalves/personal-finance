import { Footer, Input } from "../../components"
import Link from "../../components/Link"

export const Register = () => {
  return (
    <div className="commonPage">
      <div className="commonContainer">
        <aside className="commonAside">
          <img src="/register-image.svg" alt="" />
        </aside>
        <main className="commonMain">
          <h1>Controle financeiro</h1>
          <form className="commonForm">
            <h2>Crie sua conta</h2>
            <Input label="Nome: " type="name" placeholder="Digite aqui o seu nome" />
            <Input label="E-mail: " type="email" placeholder="Digite aqui o seu e-mail" />
            <Input label="Senha: " type="password" placeholder="Digite aqui a sua senha" />
            <button>Criar conta</button>
          </form>
          <Link href="/">Já tem uma conta? Faça o login clicando aqui.</Link>
        </main>
      </div>
      <Footer />
    </div>
  )
}
