import { datosLibros } from "../db/db.js";


const listaLibros= datosLibros.libros
//es el formato que va a tener la respuesta en todas las consultas de la api
const responseLibros = {
    data: listaLibros,
    msg:""
}


//obterner todos los libros
export const getAllLibros = (req,res)=> {
    responseLibros.data=listaLibros
    responseLibros.msg="Todos los libros"
    responseLibros.cant=listaLibros.length
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const getLibroById = (req,res)=> {
    const idLibro=req.params.id
    console.log(req.params)
    responseLibros.data=listaLibros.find((libro)=> libro.id==idLibro)
    responseLibros.msg="Libro con id: " + idLibro
    responseLibros.cant=responseLibros.data.length
    console.log("Libros por id")
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}



export const removeLibro= (req, res) => {
    const idLibro = req.params.id
    responseLibros.data = listaLibros.find((libro)=> libro.id == idLibro)
    responseLibros.data.splice(idLibro, 1)
    responseLibros.msg="Has borrado el librocon el ID: " + idLibro
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

}

export const addLibro= (req, res) => {
    console.log(req.body)
    const {titulo, autor,categoria} = req.body
    responseLibros.data.push({titulo, autor,categoria})
    responseLibros.msg= "Libro agregado con exito"
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros)
    
}

export const UpdateLibro= (req, res) => {
    responseLibros.msg= "Has actualizado el libro con exito"
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
    
}