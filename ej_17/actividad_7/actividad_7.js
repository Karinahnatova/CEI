import { datosLibros } from "./db/db.js";
import { timelog } from "./middlewares/logger.js";
import express, {json, response} from "express";
import PORT from "./config.js";
import { domain } from "./config.js";

const app = express();
console.clear();

app.use(timelog)

const listaLibros= datosLibros.libros

//es el formato que va a tener la respuesta en todas las consultas de la api
const responseLibros = {
    data: listaLibros,
    msg:""
}

// const fulldomain = `${domain}:${PORT}`


// 1- Obtener todos los libros: Crea una ruta que devuelva todos los libros del objeto JSON.
app.get("/datosLibros", (req, res)=> {
    res.setHeader("Content-type", "application/json");
    res.send(datosLibros); 
});

//o:

app.get("/libros", (req, res)=> {
    responseLibros.data=listaLibros
    responseLibros.msg="Todos los libros"
    responseLibros.cant=listaLibros.length
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
});

//Obtener un libro por su ID: Crea una ruta que acepte un parámetro de ruta para el ID de un libro y devuelva el libro correspondiente.

app.get("/libros/:id", (req, res)=> {
    const idLibro=req.params.id
    console.log(req.params)
    responseLibros.data=listaLibros.find((libro)=> libro.id==idLibro)
    responseLibros.msg="Libro con id: " + idLibro
    responseLibros.cant=responseLibros.data.length
    console.log("Libros por id")
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);
});

//Buscar libros por autor: Crea una ruta que acepte un parámetro de consulta para el autor y devuelva todos los libros escritos por ese autor.
app.get("/libros/author/:author", (req, res)=> {
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
app.get("/authors", (req,res) => {
    responseLibros.data = listaLibros.map((libro)=> libro.autor)
    res.setHeader("Content-type", "application/json");
    res.send(responseLibros);



    //eliminar duplicados en un array:
   const uniqueAuthors = []
   responseLibros.data.forEach((autor)=> {
    if (!uniqueAuthors.includes(autor)) {
        uniqueAuthors.puesh(autor)
    }

    //otra froma de hacerlo:
    // responseLibros.data = [...new Set(responseLibros.data)]  //usando spread y Set
})
responseLibros.data=uniqueAuthors

})


// Obtener lista de categorías: Crea una ruta que devuelva una lista de todas las categorías sin repetición.




app.listen(PORT, ()=> {
    console.log(`Server is runnin on port ${PORT}`);
});