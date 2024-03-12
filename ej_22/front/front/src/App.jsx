import './App.css'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Navigation from './components/Navigation'
import AuthorList from './components/AuthorList'
import BookList from './components/BookList'
import BookAdd from './components/BookAdd'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element= {<Lauyout/>}>
       <Route index element= {<Home/>}/>
       <Route path="/lista" element= {<BookList/>}/>
       <Route path="/agregar" element= {<BookAdd/>}/>
       <Route path="/autores" element= {<AuthorList/>}/>
       <Route path="/*" element= {<NotFound/>}/>

      </Route>
     </Routes>
    </>
  )
}

export default App

function Lauyout() {
  return (
    <>
    <Navigation/>
    <div className='content'>
    <Outlet/> 
    {/* el outlet renderiza el child que provenga del router, que las rtas hijos se cargan dentro de la plantilla del layout */}
    </div>
    <footer className='footer'>soy footer</footer>
    </>
  )
}

//npm i react-router-dom
