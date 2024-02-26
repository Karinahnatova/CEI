import { Router } from "express";
import { getLibroById, getAllLibros, addLibro, UpdateLibro, removeLibro, getLibroByAutor } from "../controllers/libros.controller.js";



const router = Router()


//--------------------RUTAS DE LIBROS------------------------------------------------------
// 1- Obtener todos los libros: Crea una ruta que devuelva todos los libros del objeto JSON.

router.get("/datosLibros", (req, res)=> {
    res.setHeader("Content-type", "application/json");
    res.send(datosLibros); 
});

router.get("/libros", getAllLibros)

router.get("/libros/:id", getLibroById)

//agregar nuevo libro
router.post("/libros", addLibro) //agregar nuevo libro

router.delete("/libro/:id", removeLibro) //eliminar un libro

router.put("/libro/:id", UpdateLibro) //actualizar un libro

router.put("/libros/author/:author", getLibroByAutor) //buscar libro por autor


//--------------------RUTAS DE AUTORES------------------------------------------------------


//Buscar libros por autor: Crea una ruta que acepte un parámetro de consulta para el autor y devuelva todos los libros escritos por ese autor.
router.get("/libros/author/:author", (req, res)=> {
    const author = helperCleanString(req.params.author) //para que la busqyeda funcione poniendo el nombre en minusculas, sacamos los espacios, minuscula, lo limpiamos
    responseLibros.data=listaLibros.filter((libro)=> helperCleanString(libro.autor).includes(author)) //cuando quiero que la frase e tera incluye un pedacito de frase, se incluye la frase
    // responseLibros.data=listaLibros.filter((libro)=> helperCleanString(libro.autor)==author) //busqueda exacta
    responseLibros.msg= "buscando autores con string: " + author
    responseLibros.cant=responseLibros.data.length
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
});

// Buscar libros por categoría: Crea una ruta que acepte un parámetro de consulta para la categoría y devuelva todos los libros de esa categoría.

// Obtener lista de autores: Crea una ruta que devuelva una lista de todos los autores sin repetición.
router.get("/authors", (req,res) => {
    responseLibros.data = listaLibros.map((libro)=> libro.autor)
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);



    //eliminar duplicados en un array:
   const uniqueAuthors = []
   responseLibros.data.forEach((autor)=> {
    if (!uniqueAuthors.includes(autor)) {
        uniqueAuthors.push(autor)
    }

    //otra froma de hacerlo:
    // responseLibros.data = [...new Set(responseLibros.data)]  //usando spread y Set
})
responseLibros.data=uniqueAuthors

})

export default router