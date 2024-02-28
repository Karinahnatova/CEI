import  express  from "express";
import {PORT, domain, fullDomain} from "./config/config.js"
import { logger } from "./middlewares/logger.js";
import { setHeaders } from "./middlewares/setHeaders.js";
import indexRoutes from "./routes/index.routes.js"
import cors from 'cors'

const app = express ()
console.clear()

//uso de midlewares
app.use(cors())//cross-origin resource sharing, permite acceder a cualquier dominio, es una libreria que importamos con npm i corse
app.use(setHeaders)
app.use(express.json()) //proesa el body para leerlo con req.boy
app.use(logger)

//rutas
app.get("/", (req, res)=> {
    res.setHeader("Content-type", "text/html")

    const landingHTML = `
    <h1>BIENVENIDOS A NUESTRA API DE HTML</h1>
    `
    res.send(landingHTML)
})

app.use("/API/v1/", indexRoutes)

//alta de servidor
app.listen(PORT, () => {
    console.log(`server corriendo en ${fullDomain}`)
})