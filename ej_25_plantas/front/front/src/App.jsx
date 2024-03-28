import './App.css'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import Layout from './pages/Layout'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element= {<Layout/>}>
       <Route index element= {<Home/>}/>
       <Route path="/products" element= {<Products/>}/>
       <Route path="/card" element= {<Card/>}/>
       <Route path="/login" element= {<Login/>}/>

      </Route>
    </Routes>
      
    </>
  )
}

export default App
