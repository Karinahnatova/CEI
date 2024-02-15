import { useState, useContext, createContext } from "react"


//1-creamos contexto
const LoginContext = createContext([]) //si creamos eluseContext dentro de un archivo enterno, habrá que importarlo

const LoginUseContext = ()=> {
    const [logIn, setLogin] = useState(false)

    return (
        //2-metemos el LoginContext, que incluye aqui todos los hijos
        <LoginContext.Provider value={[logIn, setLogin]}>
        El usuario esta {logIn? "si":"no"}
        <Nav/>
        </LoginContext.Provider>
       
    )
}

export default LoginUseContext

const Nav =()=> {
    return (
        <section>
            <nav>
                soy nav
            </nav>
            <LoginButton/>
        </section>
    )
}

const LoginButton =()=> {
    //const [logIn, SetLogin] = useState(false)
    const [logIn, SetLogin] = useContext(LoginContext) //2.1 metemos aqui el contexto,para que el hijo forme parte del padre


    const handleLogin =()=> {
        SetLogin(!logIn)
    }

    return (
        <>
        Estas logueado? {logIn ? "Si" : "No"} <br/>
        <button onClick={handleLogin}>Login/Logout</button>
        </>
    )
}