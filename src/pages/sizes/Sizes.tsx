import { useContext, useEffect, useState } from "react"
import { Button } from "../../components/button/Button"
import { Layout } from "../../components/layout/Layout"
import { routes } from "../../styles/routes"
import { useNavigate } from "react-router-dom"
import OrderContext from "../../contexts/OrderContext"

//navigate sendo usado para navegar entre as páginas
export default function Sizes() {
const navigate = useNavigate()
//ler as informações do context através do useContext
// pegar as informações (variável e função) dentro do order context para poder ler exemplo: pizzaSize, Set PizzaSize
const { pizzaSize, setPizzaSize } = useContext(OrderContext)


  const sizeOptions = [
    {
      id: "10",
      flavours: 1,
      size: 35,
      slices: 8,
      text: "Grande",
    },
    {
      id: "11",
      flavours: 2,
      size: 35,
      slices: 8,
      text: "Grande",
    },
    {
      id: "20",
      flavours: 1,
      size: 28,
      slices: 4,
      text: "Média",
    },
    {
      id: "21",
      flavours: 2,
      size: 28,
      slices: 4,
      text: "Média",
    },
    {
      id: "30",
      flavours: 1,
      size: 18,
      slices: 1,
      text: "Broto",
    },
    {
      id: "31",
      flavours: 2,
      size: 18,
      slices: 1,
      text: "Broto",
    },
  ]

  const [sizeId, setSizeId] = useState("")

  //função para pegar o id que foi escolhido e filtrar por id
  const getPizzaSize = (id: string) => {
    return sizeOptions.filter((option)=> option.id === sizeId)
  }
  //pegando o id do objeto através do click
  const handleChange = (event) => {
    setSizeId(event.target.value)

  }
  //const para voltar quando clicar
  const handleBack = () => {
    navigate(routes.home)
  }

  //const para passar a página
  const handleNext = () => {
    //const para pegar o valor
    const selectedSize = getPizzaSize(sizeId)
    setPizzaSize(selectedSize)
    navigate(routes.pizzaFlavour)
  }

  //para aparecer sempre que a tela carregar (seja indo ou voltando)
  useEffect(() => {
    //estrututa de if para verificar se o item existe e se não retorna o restante
    //sempre que usar o useEffect é importante fazer isso para não deixar a tela branca
    if(!pizzaSize) return
    setSizeId(pizzaSize[0].id)
  }, [])

  return (
    <Layout>
      <h1>Escolha o tamanho da sua pizza</h1>
      <section>
        {sizeOptions.map(({ id, size, slices, flavours, text }) => (
          <div key={id}>
            <input
              type="radio"
              id={id}
              name="sizes"
              onChange={handleChange}
              value={id}
              checked={sizeId === id}
            />
            <label htmlFor={id}>
              {text} - {flavours} sabores 
              <span>
                Pizza com {slices} pedaços e {size}cm
              </span>
              </label>
          </div>
        ))}
      </section>
      <div>
        <Button inverse="inverse" onClick={handleBack}>Voltar</Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </div>
    </Layout>
  )
}
