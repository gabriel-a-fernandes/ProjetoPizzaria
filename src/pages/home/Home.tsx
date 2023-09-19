import { useNavigate } from "react-router-dom"
import { Button } from "../../components/button/Button"
import { Layout } from "../../components/layout/Layout"
import { routes } from "../../styles/routes"
import { HomeWrapper } from "./Home.style"

export default function Home() {

  //para navegar de uma tela para a outra
  const navigate = useNavigate()

  const handleClick = () => {
    //colocar para qual caminho ele tem que ir 
    navigate (routes.pizzaSize)

  }
  return (
    <Layout>
      <HomeWrapper>
        <Button onClick={handleClick}>Iniciar pedido</Button>
      </HomeWrapper>
    </Layout>
  )
}
