import './App.css'
import {Routes, Route, Outlet, Link} from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element= {<Lauyout/>}>
       <Route index element= {<Home/>}/>
       <Route path="/lista" element= {<ListaDeLibros/>}/>
       <Route path="/contacto" element= {<Contacto/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App

function Lauyout() {
  return (
    <>
    <h1>Header</h1>
    <nav>
      <ul>
        <li><Link to="/">Bienvenida</Link></li>
        <li><Link to="/lista">Lista de libros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>


      </ul>
    </nav>
    <Outlet/> 
    {/* el outlet renderiza el child que provenga del router */}
    </>
    
  )
}

function Home() {
  return (
    <h1>Nuestra libreria home</h1>
  )
}

function ListaDeLibros() {
  return (
    <h1>Lista de libros</h1>
  )
}

function Contacto() {
  return (
    <h1>Contacto</h1>
  )
}

//npm i react -router-dom
