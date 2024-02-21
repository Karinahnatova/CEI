import { datosLibros } from "./db/db.js";
import { timelog } from "./middlewares/logger.js";
import express, {json} from "express";
import PORT from "./config.js";

const app = express();
console.clear();

app.use(timelog)


// 1- Obtener todos los libros: Crea una ruta que devuelva todos los libros del objeto JSON.
app.get("/datosLibros", (req, res)=> {
    res.setHeader("Content-type", "application/json");
    res.send(datosLibros); 
});


//Obtener un libro por su ID: Crea una ruta que acepte un parámetro de ruta para el ID de un libro y devuelva el libro correspondiente.
app.get("/datosLibros/libros/:id", (req, res)=> {
    const idLibro = req.params.id;
    res.setHeader("Content-type", "application/json");
    res.send(datosLibros);
});

//Buscar libros por autor: Crea una ruta que acepte un parámetro de consulta para el autor y devuelva todos los libros escritos por ese autor.
app.get("/datosLibros/PatrickRothfuss", (req, res)=> {
    const autor = req.params.autor
    res.setHeader("Content-type", "application/json");
    res.send(autor);
});







app.listen(PORT, ()=> {
    console.log(`Server is runnin on port ${PORT}`);
});