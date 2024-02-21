import { datosLibros } from "./db/db.js";
import { timelog } from "./middlewares/logger.js";
import express from "express";
import PORT from "./config.js";

const app = express();
console.clear();

app.use(timelog)


// 1- Obtener todos los libros: Crea una ruta que devuelva todos los libros del objeto JSON.
app.get("/datosLibros-json", (req, res)=> {
    res.setHeader("Content-type", "application/datosLibros");
    res.send(datosLibros);
});

app.get("/datosLibros-json/libros/:id", (req, res)=> {
    const idLibro = req.params.id
})








app.listen(PORT, ()=> {
    console.log(`Server is runnin on port ${PORT}`);
});