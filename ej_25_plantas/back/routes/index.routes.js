import { Router } from "express";
import multer from "multer";
import { storage } from "../middlewares/multer";

const router = Router()

//----------------------RUTA MULTER-----------------------------------
router.post("/subirarchivo", upload.single('imagen'), (req, res)=> {
    //estos datos me los ha creado mutler
    console.log("El archivo subido es:", req.file)
    // console.log("El body del form es es:", req.body)
    // console.log("Los parametros de mi url son:", req.params)


    res.send("Archivo subido correctaemnte!")
    //hay que hacerlo completo mandando el status, etc.
})

const upload = multer({ storage: storage })

export default router