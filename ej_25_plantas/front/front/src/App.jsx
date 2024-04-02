import './App.css'
import { Routes, Route } from 'react-router-dom'

//pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import Products from './pages/Products'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element= {<Layout/>}>
       <Route index element= {<Home/>}/>
       <Route path="/products" element= {<Products/>}/>
       {/* <Route path="/login" element= {<Login/>}/>  */}

      </Route>
    </Routes>
      
    </>
  )
}

export default App
