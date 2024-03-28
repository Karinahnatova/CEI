import { Router } from "express";
import multer from "multer";
import { storage } from "../middlewares/storage.js";
import { getAllProducts, getProductById, addProduct, removeProduct, updateProduct } from "../controllers/products.controller.js";

const router = Router()

//----------------❤️------RUTA MULTER--------❤️---------------------------

const upload = multer({ storage: storage })

router.post("/subirarchivo", upload.single('imagen'), (req, res)=> {
    //estos datos me los ha creado mutler
    console.log("El archivo subido es:", req.file)
    // console.log("El body del form es es:", req.body)
    // console.log("Los parametros de mi url son:", req.params)


    res.send("Archivo subido correctaemnte!")
    //hay que hacerlo completo mandando el status, etc.
})


//----------------❤️------RUTA PRODUCTOS--------❤️---------------------------
router.get("/products", getAllProducts)

router.get("/products/:id", getProductById)

router.post("/products", addProduct)

router.delete("/product/:id", removeProduct)

router.put("/product/:id", updateProduct)

//----------------❤️------RUTA USUARIOS--------❤️---------------------------

//ruta login
// router.post("/auth/login", loginUser)
// router.post( "auth/register", registerUser)

//rutas de usuarios
// router.get("/usuario", getUser)
// router.get("/usuario/:id", getUserById)
// router.get("/usuario", loginUserCrypted)


export default router
