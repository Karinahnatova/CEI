import { useState } from "react"
import './Lightbox.css'


const Lightbox =()=> {
    //primer atributo variale
    //segundo atributo funcion que actualiza la variable
    //tercer valor es el vaor inicial de la variable
    const [isOpen, setIsOpen] = useState(false)
    const toggleLightbox =()=> {
        setIsOpen(!isOpen)

    }

    return (
        <div>
            <button onClick={toggleLightbox}>Abrir Lightbox</button>
            {isOpen && <div>
                <div className="Lightbox-backdrop"></div>
                <button onClick={toggleLightbox}>X</button>
                <h3>Contenido del Lightbox</h3>
                
        
            </div>}
            
        </div>
    )
}

export default Lightbox