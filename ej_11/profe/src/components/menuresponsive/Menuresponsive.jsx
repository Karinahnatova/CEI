import './Menuresponsive.css'
import { useState } from 'react'


const MenuResponsive = ()=> {

    const items = [
        {
            titulo: "home",
            href: "#"
        },
        {
            titulo: "contacto",
            href: "#"
        },
        {
            titulo: "productos",
            href: "#"
        }
    ]

    const [isOpen, setIsOpen] = useState(false) //para que el menu aparezca cerrado al cargar la pagina

    const toggleMenu = ()=> {
        setIsOpen(!isOpen)
    }

    return(
        <header className="Header">
            <h1>Logo</h1>
            <nav className={`Header-nav ${isOpen ? "isVisible": ""}`}>
                <ul className='Header-ul'>
                    {items.map((item, index)=> (
                        <Li key={index} {...item}/>

                    ))}

                </ul>
            </nav>
            
            {/* Botón responsive del menú */}
            <button onClick={toggleMenu} className='Header-btn'>
                BtnIcon
            </button>
        </header>
    )
}

const Li =({titulo, href})=> {
    return (
        <a className='Header-a' href={href}><li className='Header-li'>{titulo}</li></a>
    )
    
}

export default MenuResponsive