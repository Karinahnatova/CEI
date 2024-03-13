import { useState, useEffect } from "react"
import { easyFetch } from "../helpers/utils"
import { useNavigate } from "react-router-dom"

const Usuario = () => {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() //previene de que no cargue la página, que no se enví el formulario
        console.log("enviando el formulario con react")
        
        easyFetch({
            url: "http://localhost:3000/API/v1/usuario/",
            method: 'POST',
            body: JSON.stringify({user: user, pass: pass}),
            callback: (jsonData) => {
                setUser(jsonData.data)
                setPass(jsonData.data)

                navigate('/home')
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
            <button type="submit">ENTRAR</button>
        </form>

        
        </>
    )

}

export default Usuario