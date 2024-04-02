import express from "express";
import cors from 'cors'
import router from "./routes/index.routes.js";


//archivo de configuración
import dotenv from 'dotenv'
dotenv.config()

const app = express()
console.clear()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true})) //middleare para procesar los formularios

app.get("/", (req, res, next) => {
    res.setHeader("Content-Type", "text/html")
    const landingHTML = `<h1>Bienvenidos al Aut API con JWT</h1>`
    res.send(landingHTML)
})

app.use("/API/", router)

app.listen(3000, ()=> {
    console.log("Server corriendo en http://localhost:3000")
})
