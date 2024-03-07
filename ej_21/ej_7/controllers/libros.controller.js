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
    const [results, fields] = await connection.query(sql)
    const sql = 'SELECT * FROM autores LEFT JOIN libro ON (libro.id_autor = autores.id)' //lo guardamos en una constante porque cada vez nuestras consultas serán más complejas
    responseLibros.data = results
    responseLibros.msg = "Todos los libros"
    responseLibros.cant = results.length
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const getLibroById = async(req,res)=> {
    const idLibro = req.params.id
    const [results, fields] = await connection.query(sql)
    const sql = 'SELECT * FROM libro WHERE id =' + idLibro
    responseLibros.data = results
    responseLibros.msg="Libro con id: " + idLibro
    console.log("Libros por id")
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const removeLibro= async(req, res) => {
    const idLibro = req.params.id
    const [results, fields] = await connection.query(sql)
    const sql = 'DELETE FROM libro WHERE id = ' + idLibro
    responseLibros.data = results[index]
    responseLibros.data.splice(index, 1)
    responseLibros.msg="Has borrado el librocon el ID: " + idLibro
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const addLibro= async(req, res) => {
    const [results, fields] = await connection.query(sql)
    const {libro, id_autor=0, calificación=0, lanzamiento="", editorial="", precio=0, cant_vendidos=0, num_paginas=0, created_at=0, updated_at=0, deleted_at=0} = req.body
    const sql = `INSERT INTO libro (libro, id_autor, calificación, lanzamiento, editorial, precio, cant_vendidos, num_paginas, created_at, updated_at, deleted_at) VALUES ('${libro}', '${id_autor}', '${calificación}', '${lanzamiento}', '${editorial}',  '${precio}', '${cant_vendidos}', '${num_paginas}', '${created_at}', '${updated_at}', '${deleted_at}')`
    responseLibros.data = results
    responseLibros.msg= "Crear nuevo libro"
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros)
    
}

export const UpdateLibro= async(req, res) => {
    const idLibro = req.params.id
    const [results, fields] = await connection.query(sql)
    const {libro, id_autor=0, calificación=0, lanzamiento="", editorial="", precio=0, cant_vendidos=0, num_paginas=0, created_at=0, updated_at=0, deleted_at=0} = req.body
    const sql = `UPDATE libro SET id='[value-1]',libro='[value-2]',id_autor='[value-3]',calificación='[value-4]',lanzamiento='[value-5]',editorial='[value-6]',precio='[value-7]',cant_vendidos='[value-8]',num_paginas='[value-9]',created_at='[value-10]',updated_at='[value-11]',deleted_at='[value-12]' WHERE id = ` + idLibro `VALUES ('${libro}', '${id_autor}', '${calificación}', '${lanzamiento}', '${editorial}',  '${precio}', '${cant_vendidos}', '${num_paginas}', '${created_at}', '${updated_at}', '${deleted_at}')`
    responseLibros.data= results
    responseLibros.msg= "Has actualizado el libro con exito"
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
    
}

export const getLibroByAutor = async(req, res)=> {
    const autor = req.params.autores
    const [results, fields] = await connection.query(sql)
    const sql = 'SELECT * FROM libro WHERE id_autor = ' + autor
    response.data= results
    responseLibros.msg="Libro con autor: " + autor
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}






//UNIR TABLAS, DE CATEGORIAS
// SELECT categorias.categoria FROM categorias JOIN link_libro_categorias ON (link_libro_categorias.id_categoria = categorias.id)
