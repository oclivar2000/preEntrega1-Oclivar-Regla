import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"

function App(){
  return (
    <>
      <div>
       <NavBar />
       <ItemListContainer greeting= "Este es un mensaje desde la funcion App" />
      </div>
      
    </>
  )
}

export default App
