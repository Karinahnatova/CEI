import { useRef } from "react"

//useRef es para no vlver a renderizar, la idea es obtener informacion de una variable o state sobre un elemento, pudiendo usar metodos de html en las funciones, como aplicar estilos

const FocusRef =()=> {
    const nameRef = useRef()

    const focus = () => {
        nameRef.current.focus()

    }
    
    const blur = ()=> {
        nameRef.current.blur()
    
    }

    const scrollToBottom =()=> {
        nameRef.current.scrollIntoView({behavior: "smooth"})
        
    }

    return (
        <section>
            {/* Scroll to bottom */}
            <button onClick={scrollToBottom}>Bajar</button>
            <div style={{marginBottom: "2000px"}}>Separador</div>

            {/* Focus y blur */}
            <label htmlFor="name">Ingresa tu nombre</label>
            <input ref={nameRef} type="text" name="name" id="name" />
            <button onClick={focus}>Focus</button>
            <button onClick={blur}>Blur</button>

        </section>
    )
}

export default FocusRef