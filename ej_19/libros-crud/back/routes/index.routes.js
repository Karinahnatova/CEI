import { Router } from "express";
import { getAllLibros, getLibroById, createLibro, updateLibro, deleteLibro} from '../controllers/libros.controller.js'


const router = Router();

//todos los libros
router.get("/libros", getAllLibros);

//crud: create read update delete
router.get("/libros/:id", getLibroById);
router.post("/libros", createLibro)//crear un libro nuevo con post, lo tenemos que usar con la extensión thunderclient
router.put("/libros/:id", updateLibro)//actualizar un libro con put
router.delete("/libros/:id", deleteLibro)//eliminar libro con delete

//-------------------------------------------------------------------

// //todos los autores
// router.get("/autores", getAllLibros);

// //crud: create read update delete
// router.get("/autores/:id", getAutorById);
// router.post("/autores", createAutor)//crear un Autor nuevo con post
// router.put("/autores/:id", updateAutor)//actualizar un Autor con put
// router.delete("/autores/:id", deleteAutor)//eliminar libro con delete

export default router