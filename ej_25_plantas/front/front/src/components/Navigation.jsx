import {Link} from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
      <header className='Header'>
      <h1 className='Header_logo'>VerdeCarlos</h1>
      <nav className={`nav ${isOpen ? "" : "isVisible"}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/card">Card</Link></li>

      </ul>
      </nav>
      <div>
      <button onClick={toggleMenu} className="Header-button">
          <span className="material-symbols-outlined">menu</span>
      </button>

      </div>
      
      
      </header>
    
    )

}

export default Navigation