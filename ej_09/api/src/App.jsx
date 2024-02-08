import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Episodios } from './components/Episodios'
import { Lugares } from './components/Lugares'
import { Personajes } from './components/Personajes'

function App() {
  const [paginaActual, setPaginaActual] = useState('personajes')


  return (
    <>
    <h1>RICK AND MORTY API</h1>
    <nav>
      <button className={ paginaActual === "personajes" ? "active":""} onClick={()=> setPaginaActual("personajes")}>Personajes</button>
      <button className={ paginaActual === "episodios" ? "active":""} onClick={()=> setPaginaActual("episodios")}>Episodios</button>
      <button className={ paginaActual === "lugares" ? "active":""} onClick={()=> setPaginaActual("lugares")}>Lugares</button>
    </nav>
      
    {paginaActual === "personajes" && <Personajes/>}
    {paginaActual === "episodios" && <Episodios/>}
    {paginaActual === "lugares" && <Lugares/>}

    


    </>
  )


  




}

export default App
