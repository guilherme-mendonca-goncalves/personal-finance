import { Footer, Input } from "../../components"

export const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <aside className="loginAside">
          <img src="/login-image.svg" alt="" />
        </aside>
        <main className="loginMain">
          <h1>Controle financeiro</h1>
          <form className="loginForm">
            <h2>Faça o login</h2>
            <Input label="E-mail: " type="email" placeholder="Digite aqui o seu e-mail" />
            <Input label="Senha: " type="password" placeholder="Digite aqui a sua senha" />
            <button>Entrar</button>
          </form>
          <a href="">Não tem uma conta? Crie a sua agora clicando aqui.</a>
        </main>
      </div>
      <Footer />
    </div>
  )
}
