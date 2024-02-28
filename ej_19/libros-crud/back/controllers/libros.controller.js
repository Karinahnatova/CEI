import { response } from "express";
import misDatos from "../db/datos.js";


const listaLibros = misDatos.libros

//crear formato de respuesta
const responseAPI = {
    data: listaLibros,
    msg: "",
    status: "ok"
}

export const getAllLibros = (req, res) => {
    responseAPI.data= listaLibros;
    responseAPI.msg= "Obtener libros";
    responseAPI.status="ok"
    res.status(200).send(responseAPI)

}
export const getLibroById = (req, res) => {
    responseAPI.data= "";
    responseAPI.msg= "Obtener libros";
    responseAPI.status="ok"
    res.status(200).send(responseAPI)

}
export const createLibro = (req, res) => {
    const {titulo, autor, categoria} = req.body
    const newId= Math.random()
    listaLibros.push({id: newId, titulo, autor, categoria})
    responseAPI.data= listaLibros;
    responseAPI.msg= "Crear nuevo libro";
    responseAPI.status="ok"
    res.status(200).send(responseAPI)

}
export const updateLibro = (req, res) => {
    //1-recibir datos del body
    // console.log(req.body)
    const {id, titulo, autor, categoria} = req.body
    //2-obtener de la lista de libros el liro que quiera editar, segun el id
    const index = listaLibros.findIndex(libro=> libro.id == id)
    //3-actualizar el libro con los nuevos valores
    listaLibros[index] = {
        ...listaLibros[index],
        titulo,
        autor,
        categoria
    }


    //respondo con la nueva lista de libros actualizada
    responseAPI.data= listaLibros;
    responseAPI.msg= "Obtener libros";
    responseAPI.status="ok"
    res.status(200).send(responseAPI)

}
export const deleteLibro = (req, res) => {
    console.clear()

    //obtener el id de la url (no del body) ej: http://dominio.com/endpoint/:id
    const idLibro = req.params.id

    const index = listaLibros.findIndex(libro => libro.id === idLibro)

    //eliminar el item del array:
    responseAPI.data=listaLibros[index]
    listaLibros.splice(index, 1) //eliminar un item desde el indice

    responseAPI.msg= "libro eliminado"
    res.status(200).send(responseAPI)

}