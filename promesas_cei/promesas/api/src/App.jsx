import Products from "./componentes/Fakestoreapi"
import Users from "./componentes/Randomuser"
import Pokemons from "./componentes/Pokeapi"
import Dragons from "./componentes/Rawg"
import './App.css'
import { useState } from "react"


function App() {

  const [apiActual, setApiActual] = useState('') //al actualizar la pagina, apareceerá la seccioón de personajes



  return (
    <div className="Api_div">
    <h1 className="Api_h1">SELECT THE API:</h1>

    <nav className="Api_nav">
      <button className={ apiActual === "products" ? "active":""} onClick={()=> setApiActual("products")}><span>fakestoreapi</span></button>
      <button className={ apiActual === "users" ? "active":""} onClick={()=> setApiActual("users")}><span>randomuser</span></button>
      <button className={ apiActual === "pokemons" ? "active":""} onClick={()=> setApiActual("pokemons")}><span>POKEAPI</span></button>
      <button className={ apiActual === "dragons" ? "active":""} onClick={()=> setApiActual("dragons")}><span>RAWG</span></button>



    </nav>
      
    {apiActual === "products" && <Products/>}
    {apiActual === "users" && <Users/>}
    {apiActual === "pokemons" && <Pokemons/>}
    {apiActual === "dragons" && <Dragons/>}



      
    </div>
  )
}

export default App
