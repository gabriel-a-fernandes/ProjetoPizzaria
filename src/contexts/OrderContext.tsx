import { createContext, useState } from "react"

// criando uma const e inicializando com objeto vazio (salvando espaço na memória)
const OrderContext = createContext ({})


// criando o provedor dos dados para manipular os dados (receber e enviar)
const OrderContextProvider = ({ children }) => {
    const [pizzaSize, setPizzaSize] = useState("")

    return( 
    <OrderContext.Provider value={{pizzaSize, setPizzaSize}}>
        {children}
    </OrderContext.Provider>)
}

//exportando as duas funções
export {OrderContextProvider}
export default OrderContext
