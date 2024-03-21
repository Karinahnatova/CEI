//meter los componentes si son paginas, en una carpeta de pages
//se pude hacer un use context de un interruptor de tema ligth o dark
import { useState, useEffect } from "react"
import { easyFetch } from "../../helpers/utils"
import { useNavigate } from "react-router-dom"


//podemos obtener un vite hostname
const {VITE_NAME, VITE_MODE, VITE_BACKEND_URL} = import.meta.env

const Usuario = () => {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() //previene de que no cargue la página, que no se enví el formulario
        console.log("enviando el formulario con react")
        
        easyFetch({
            url: `${VITE_BACKEND_URL}/API/v1/usuario`,
            method: 'POST',
            body: JSON.stringify({user: user, pass: pass}),
            callback: (data) => {
                console.log("has entrado con éxito", data)
                if (data.succes) {
                    navigate("/lista")
                } else {
                    alert("datos invalidos" + data.msg)
                }
            }
        })

    }

    return(
        <>
        <h2>LOGGIN</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" value={user} onChange={(e)=> setUser(e.target.value)} name="nombre" id="nombre" placeholder="Ingresa tú nombre"/>
            <br />
            <label htmlFor="nombre">Contraseña</label>
            <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)} name="contraseña" id="contraseña" placeholder="Ingresa tú contraseña"/>
            
        </form>
        <button onClick={handleSubmit}>ENTRAR</button>

        
        </>
    )

}

export default Usuario