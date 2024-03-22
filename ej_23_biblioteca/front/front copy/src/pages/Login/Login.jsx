import { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";

const Login = () => {

    const [isLogin, setIsLogin]= useState(true)

    return (
        <>
        <div>
            <button onClick={()=> setIsLogin(true)}>Log in</button>
            <button onClick={()=> setIsLogin(false)}>Register</button>

        </div>
        {isLogin ? <LoginForm/> : <RegisterForm/> }
        </>
    )

}

export default Login