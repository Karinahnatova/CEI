import { response } from 'express'
import mysql from 'mysql2/promise'

const responseLibros = {
    data: [],
    msg:"",
 
}

export const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'libros'
})

export const getUsuario = async(req, res)=> {
    const usuario = req.params.usuario
    const [results, fields] = await connection.query(sql)
    const sql = 'SELECT * FROM `usuario`'
    response.data= results
    responseLibros.msg= "Usuario: " + usuario
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const getUsuarioById = async(req, res)=> {
    const id_usuario = req.params.id
    const [results, fields] = await connection.query(sql)
    const sql = 'SELECT * FROM usuario WHERE id = ' + id_usuario
    response.data= results
    responseLibros.msg= "Usuario con el id: " + id_usuario
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const loginUser = async(req, res)=> {
    const {nombre, contraseña} = req.body
    const consulta = "SELECT * FROM `usuario` WHERE `nombre` = ? AND `contraseña` = ? AND `created_at` IS NULL "
    const params = [nombre, contraseña]
    response.data= results
    const [results, fields] = await connection.query(sql)
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
}

export const loginUserCrypted = async(req, res)=> {

    const db_user = results[0]
    console.log(db_user.contraseña, contraseña)
    const isPasswordValid = bcrypt.compareSync(contraseña, db_user.contraseña)
}