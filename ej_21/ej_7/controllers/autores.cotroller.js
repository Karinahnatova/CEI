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

export const getAllAuthors = async (req, res) => {
    const [results, fields] = await connection.query(sql)
    const sql = 'SELECT * FROM autores' 
    responseLibros.data = results
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
}

export const getAuthorById = async (req, res)=> {
    const idAuthor = req.params.id
    const [results, fields] = await connection.query(sql)
    const sql = 'SELECT * FROM autores WHERE id = ' + idAuthor
    responseLibros.data = results
    // const author = helperCleanString(req.params.author) //para que la busqyeda funcione poniendo el nombre en minusculas, sacamos los espacios, minuscula, lo limpiamos
    responseLibros.msg= "buscando autores con string: " + idAuthor
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
}