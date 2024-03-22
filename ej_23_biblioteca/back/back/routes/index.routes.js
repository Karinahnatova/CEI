import { Router } from "express";
import { getLibroById, getAllLibros, addLibro, UpdateLibro, removeLibro, getLibroByAutor } from "../controllers/libros.controller.js";
import { loginUser, loginUserCrypted } from "../controllers/auth.controller.js";
import { getUsuario, getUsuarioById } from "../controllers/usuarios.controller.js";
import multer from "multer";

const router = Router()

// const upload = multer({dest: 'uploads/'})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    // filename: function (req, file, cb) {
    //     //fecha y numero al azar
    //     //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    // }
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
//----------------------RUTA MULTER-----------------------------------
router.post("/subirarchivo", upload.single('imagen'), (req, res)=> {
    //estos datos me los ha creado mutler
    console.log("El archivo subido es:", req.file)
    // console.log("El body del form es es:", req.body)
    // console.log("Los parametros de mi url son:", req.params)


    res.send("Archivo subido correctaemnte!")
    //hay que hacerlo completo mandando el status, etc.
})

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

//ruta login
router.post("/auth/login", loginUser)
//router.post( "auth/register", registerUser)


//rutas de usuarios
router.get("/usuario", getUsuario)
router.get("/usuario/:id", getUsuarioById)
router.get("/usuario", loginUserCrypted)








export default router