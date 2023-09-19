import { useState } from "react"
import { Button } from "../../components/button/Button"
import { Layout } from "../../components/layout/Layout"
import { routes } from "../../styles/routes"
import { useNavigate } from "react-router-dom"

//navigate sendo usado para navegar entre as páginas
export default function Sizes() {
  const navigate = useNavigate()


  const sizeOptions = [
    {
      id: 10,
      value: "large",
      text: "Grande",
    },
    {
      id: 11,
      value: "large-2",
      text: "Grande 2 Sabores",
    },
    {
      id: 20,
      value: "medium",
      text: "Média",
    },
    {
      id: 21,
      value: "medium-2",
      text: "Média 2 Sabores",
    },
    {
      id: 30,
      value: "small",
      text: "Broto",
    },
    {
      id: 31,
      value: "small-2",
      text: "Broto 2 Sabores",
    },
  ]

  const [size, setSize] = useState("")

  //pegando o id do objeto através do click
  const handleChange = (event) => {
    setSize(event.target.id)

  }
  //const para voltar quando clicar
  const handleBack = () => {
    navigate(routes.home)
  }

  //const para passar a página
  const handleNext = () => {
    navigate(routes.pizzaFlavour)
  }

  return (
    <Layout>
      <h1>Escolha o tamanho da sua pizza</h1>
      <section>
        {sizeOptions.map(({ id, value, text }) => (
          <article key={id}>
            <input
              type="radio"
              id={value}
              name="sizes"
              onChange={handleChange}
              value={size}
            />
            <label htmlFor={value}>{text}</label>
          </article>
        ))}
      </section>
      <div>
        <Button inverse="inverse" onClick={handleBack}>Voltar</Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </div>
    </Layout>

  )
}
