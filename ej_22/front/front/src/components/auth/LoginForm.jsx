import { useState, useEffect } from "react";
import { AuthContext } from "../../pages/Login/Layout";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { easyFetch } from "../../helpers/utils";


//obtenemos el hostname para los fetch
const {VITE_NAME, VITE_MODE, VITE_BACKEND_URL}= import.meta.env

function LoginForm() {
    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext)

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() //previene de que no cargue la página, que no se enví el formulario
        
        easyFetch({
            url: `${VITE_BACKEND_URL}/auth/login`,
            method: 'POST',
            body: JSON.stringify({user: user, pass: pass}),
            callback: (data) => {
                console.log("Exito logedin", data)

                if(data.succes) {
                    setIsLoggedIn(true)
                    navigate("/lista")
                } else {
                    alert("Datos inválidos" + data.msg)
                }
            }
        })

    }

    return(
        <>

        <form onSubmit={handleSubmit}>

            {isLoggedIn && <h2>Ya estás logueado</h2>}
            {!isLoggedIn && <h2>No estás logueado</h2>}

            <label htmlFor="user">Usuario</label>
            <input type="text" id="user" name="user" 
            value={user}
            placeholder="Ingrese su usuario"
            onChange={(e)=> setUser(e.target.value)}/>
            <br />
            <label htmlFor="nombre">Contraseña</label>
            <input type="password" id="pass" name="pass" 
            value={pass} 
            placeholder="Ingrese su clave"
            onChange={(e)=> setPass(e.target.value)}/>
        </form>
        <button onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>Change Login</button>

        
        </>
    )
}

export default LoginForm