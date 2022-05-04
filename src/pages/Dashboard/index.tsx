import { ControlerCRUD, Footer } from "../../components"
import Link from "../../components/Link"

export const Dashboard = () => {
  return (
    <div className="dashboarPage">
      <header className="dashboardHeader">
        <h2>Controle de gastos</h2>
        <nav>
          <Link href="/"><button>Sair</button></Link>
        </nav>
      </header>
      <body>
        <ControlerCRUD />
      </body>
      <Footer />
    </div>
  )
}
