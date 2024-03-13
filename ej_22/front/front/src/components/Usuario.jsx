import { useState, useEffect } from "react"
import { easyFetch } from "../helpers/utils"
import { useNavigate } from "react-router-dom"

const Usuario = () => {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const navegador = useNavigate


    useEffect(()=> {
        fetchUsers()
    })

    const fetchUsers = async () => {
        easyFetch({
            url: "http://localhost:3000/API/v1/usuario/",
            method: 'POST',
            body: JSON.stringify({user: user, pass: pass}),
            callback: (jsonData) => {
                setUser(jsonData.data)
                setPass(jsonData.data)
            }
        })
    }

    return(
        <>
        <h2>LOGGIN</h2>
        {/* onSubmit={handleSubmit} style={formStyle} */}
        <form >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Ingresa tú nombre"/>
    
            <br />
            <label htmlFor="nombre">Contraseña</label>
            <input type="password" name="contraseña" id="contraseña" placeholder="Ingresa tú contraseña"/>
        </form>
        <button>ENTRAR</button>
        
        </>
    )

}

export default Usuario