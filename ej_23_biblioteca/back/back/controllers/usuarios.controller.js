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