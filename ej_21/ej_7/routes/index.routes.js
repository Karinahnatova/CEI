import { Router } from "express";
import { getLibroById, getAllLibros, addLibro, UpdateLibro, removeLibro, getLibroByAutor } from "../controllers/libros.controller.js";

const router = Router()

//--------------------RUTAS DE LIBROS------------------------------------------------------

router.get("/datosLibros", (req, res)=> {
    res.setHeader("Content-type", "application/json");
    res.send(datosLibros); 
});

router.get("/libros", getAllLibros)

router.get("/libros/:id", getLibroById)

router.post("/libros", addLibro)

router.delete("/libro/:id", removeLibro)

router.put("/libro/:id", UpdateLibro)

router.put("/libros/author/:author", getLibroByAutor)

//--------------------RUTAS DE AUTORES------------------------------------------------------

router.get("/libros/author/:author", (req, res)=> {
    const author = helperCleanString(req.params.author) //para que la busqyeda funcione poniendo el nombre en minusculas, sacamos los espacios, minuscula, lo limpiamos
    responseLibros.data=listaLibros.filter((libro)=> helperCleanString(libro.autor).includes(author)) //cuando quiero que la frase e tera incluye un pedacito de frase, se incluye la frase
    responseLibros.msg= "buscando autores con string: " + author
    responseLibros.cant=responseLibros.data.length
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
});

router.get("/authors", (req,res) => {
    responseLibros.data = listaLibros.map((libro)=> libro.autor)
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);

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