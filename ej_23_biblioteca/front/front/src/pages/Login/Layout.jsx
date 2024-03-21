import {Routes, Route, Outlet, Link, } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import { useState, createContext } from 'react'

export const AuthContext = createContext()

function Lauyout() {

  const [isLoggedIn, setIsLoggedIn]= useState(false)
  console.log("isLoggedIn",isLoggedIn)

    return (
      <>
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Navigation />
          <div className="content">
            <Outlet />
            {/* el outlet renderiza el child que provenga del router, que las rtas hijos se cargan dentro de la plantilla del layout */}
          </div>
          <footer className="footer">soy footer</footer>
        </AuthContext.Provider>
      </>
    );
}

export default Lauyout