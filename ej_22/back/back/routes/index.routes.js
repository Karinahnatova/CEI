import { Router } from "express";
import { getLibroById, getAllLibros, addLibro, UpdateLibro, removeLibro, getLibroByAutor, getUsuario, getUsuarioById, loginUser, loginUserCrypted } from "../controllers/libros.controller.js";

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

// router.get("/authors", getAllAuthors)

// router.get("/author/:author", getAuthorById)

// router.post("/")

//----------RUTA DE USUARIOS---------------------------------

router.get("/usuario", getUsuario)
router.get("/usuario/:id", getUsuarioById)
router.get("/usuario", loginUser)
router.get("/usuario", loginUserCrypted)








export default router