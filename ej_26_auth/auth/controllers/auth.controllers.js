import { generarTokenJWT } from "../helpers/utils.js"

export const loginUser = async (req, res, next) => {
    try{
        const{user, pass} = req.body
        //1.buscar en la db mi usuario
        const usuario = {
            id: "dhshisdhi",
            nombre: "Marisa",
            rol: "ADMIN",
            pass: "ssdsdsdssd"
        }
        // if(!isValid) {
        //     return res.status(401).json({msg: "usuario no existe", status: "error"})
        // }
        

        //2.comparar la contraseña proporcionada con la de la db
        // const isValid = await bcrypt.compare(pass, usuario.pass)
        // if(!isValid) {
        //     return res.status(401).json({msg: "clave invalida", status: "erroe"})
        // }
        //generar la llave "token"
        const token = generarTokenJWT(usuario)

        //eliminar datos sensibles
        delete usuario.pass

        res.status(200).json({msg: "login correcto", jwtToken: token ,user: usuario, status: "ok"})

    }catch(error){
        next(error)
    }

}

export const registerUser = async (req, res, next) => {
    try{

    }catch(error){
        next(error)
    }

}