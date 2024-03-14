import {Routes, Route, Outlet, Link, } from 'react-router-dom'
import Navigation from '@/components/Navigation'
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

export default Lauyout