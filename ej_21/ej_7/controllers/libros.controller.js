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

export const getAllLibros = async(req,res)=> {

    const consulta = 'SELECT * FROM autores LEFT JOIN libro ON (libro.id_autor = autores.id)' //lo guardamos en una constante porque cada vez nuestras consultas serán más complejas
    const [results, fields] = await connection.query(consulta)
    responseLibros.data = results
    responseLibros.msg = "Todos los libros"
    responseLibros.cant = results.length
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const getLibroById = async(req,res)=> {
    const idLibro = req.params.id
    const [results, fields] = await connection.query(
        'SELECT * FROM libro WHERE id =' + idLibro
    )
    console.log(req.params)
    responseLibros.data = results
    responseLibros.msg="Libro con id: " + idLibro
    console.log("Libros por id")
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const removeLibro= async(req, res) => {
    const idLibro = req.params.id
    const [results, fields] = await connection.query(
        'DELETE FROM libro where id = ' + idLibro
    )
    responseLibros.data = results
    responseLibros.data.splice(idLibro, 1)
    responseLibros.msg="Has borrado el librocon el ID: " + idLibro
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const addLibro= async(req, res) => {
    const [results, fields] = await connection.query(
        'SELECT * FROM autores LEFT JOIN libro ON (libro.id_autor = autores.id)'
    )
    console.log(req.body)
    const {libro, id_autor} = req.body
    responseLibros.data.push({libro, id_autor})
    responseLibros.msg= "Libro agregado con exito"
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros)
    
}

export const UpdateLibro= async(req, res) => {
    const [results, fields] = await connection.query(
        'SELECT * FROM autores LEFT JOIN libro ON (libro.id_autor = autores.id)'
    )
    responseLibros.msg= "Has actualizado el libro con exito"
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
    
}

export const getLibroByAutor = async(req, res)=> {
    const [results, fields] = await connection.query(
        'SELECT * FROM autores LEFT JOIN libro ON (libro.id_autor = autores.id)'
    )
    res.setHeader("Content-type", "application/json");
    const autor = req.params.autores
    res.send(responseLibros);

}