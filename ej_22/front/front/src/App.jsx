import './App.css'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import Lauyout from './pages/Login/Layout'

//meter los componentes por carpetas y renombrarlos a index
//paginas
import AuthorList from './pages/AuthorList/AuthorList'
import BookList from './pages/BookList/BookList'
import Home from './pages/Home/Home'
import Usuario from './pages/Usuario/Usuario'
import BookAdd from './pages/BookAdd'
import NotFound from './pages/NotFound'



//paginas


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element= {<Lauyout/>}>
       <Route index element= {<Home/>}/>
       <Route path="/lista" element= {<BookList/>}/>
       <Route path="/agregar" element= {<BookAdd/>}/>
       <Route path="/autores" element= {<AuthorList/>}/>
       <Route path="/login" element= {<Usuario/>}/>
       <Route path="/*" element= {<NotFound/>}/>

      </Route>
     </Routes>
    </>
  )
}

export default App

//npm i react-router-dom
