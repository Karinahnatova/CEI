import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Episodios } from './components/Episodios'
import { Lugares } from './components/Lugares'
import { Personajes } from './components/Personajes'

function App() {
  const [paginaActual, setPaginaActual] = useState('personajes', 'episodios')
  




  return (
    <div className='rick_morty_box'>
    <h1 className='titulo'>RICK AND MORTY API</h1>
    <nav>
      <button className={ paginaActual === "personajes" ? "active":""} onClick={()=> setPaginaActual("personajes")}><span>Personajes</span></button>
      <button className={ paginaActual === "episodios" ? "active":""} onClick={()=> setPaginaActual("episodios")}><span>Episodios</span></button>
      <button className={ paginaActual === "lugares" ? "active":""} onClick={()=> setPaginaActual("lugares")}><span>Lugares</span></button>
    </nav>
      
    {paginaActual === "personajes" && <Personajes/>}
    {paginaActual === "episodios" && <Episodios/>}
    {paginaActual === "lugares" && <Lugares/>}

    


    </div>
  )


  




}

export default App
