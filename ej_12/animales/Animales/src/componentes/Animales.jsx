import { useState } from "react"
import './Animales.css'

const Animales = ()=> {

    return(
        <>
        <Header/>
        <AllAnimals/>

        
        </>
    )

}

const Header = ()=> {
    const menu = [
        {id:1, titulo: "Inicio", href: "#"},
        {id:2, titulo: "Perdidos", href: "#"},
        {id:3, titulo: "Encontrados", href: "#"},
        {id:3, titulo: "Contacto", href: "#"}
    ]

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu =()=> {
        setIsOpen(!isOpen)
    }

    return (
        <header className="Header">
            <h1 className="Header-h1">Mascotas Perdidas</h1>
            <nav className={`Header-nav ${isOpen ? "" : "isVisible"}`}>
                <ul className="Header-ul">
                    {menu.map((menu, index)=> (
                        <Li key={index}{...menu}/>

                    ))}
                </ul>
            </nav>

            {/* botón menú hamburguesa */}
            <button onClick={toggleMenu} className="Header-button"><span class="material-symbols-outlined">menu</span></button>
        </header>

    )
}

const Li = ({titulo, href})=> {
    return (
        <a className="Header-a" href={href}><li className="Header-li">{titulo}</li></a>
    )
}

const AllAnimals = ()=> {
    const theAnimals = [
        {id: 1, name: "Rayo", specie: "Perro", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 2, name: "Boris", specie: "Gato", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 3, name: "Willy", specie: "Loro", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 4, name: "Wilson", specie: "Gato", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 5, name: "Bolita", specie: "Perro", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 6, name: "Nia", specie: "Gato", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 7, name: "Mimi", specie: "Perro", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 8, name: "Luna", specie: "Perro", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 9, name: "Kesha", specie: "Loro", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true},
        {id: 10, name: "Cookie", specie: "Perro", gender: "Macho", edad: 3, color: "Marrón con manchas blancas" ,lost: true}


    ]

    return(
        <>
        </>
    )

}

export default Animales