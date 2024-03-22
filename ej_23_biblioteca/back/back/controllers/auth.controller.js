import { response } from 'express'
import mysql from 'mysql2/promise'
import { database } from '../config/config.js'

const responseLibros = {
    data: [],
    msg:"",
 
}

export const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: database
})

export const loginUser = async(req, res)=> {
    const {user, pass} = req.body
    const consulta = "SELECT * FROM `usuario` WHERE `nombre` = ? AND `password` = ? ;"
    const params = [user, pass]
    const [results, fields] = await connection.query(consulta, params)
    delete results.password;
    responseLibros.data= results
    responseLibros.msg= "usuario obtenido"
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
}

export const loginUserCrypted = async(req, res)=> {

    const db_user = results[0]
    console.log(db_user.contraseña, contraseña)
    const isPasswordValid = bcrypt.compareSync(contraseña, db_user.contraseña)
}