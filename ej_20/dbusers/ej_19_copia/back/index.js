import  express  from "express";
import {PORT, fullDomain} from "./config/config.js"
import { logger } from "./middlewares/logger.js";
import { setHeaders } from "./middlewares/setHeaders.js";
import cors from 'cors'

const app = express ()
console.clear()

//uso de midlewares
app.use(cors())//cross-origin resource sharing, permite acceder a cualquier dominio, es una libreria que importamos con npm i corse
app.use(setHeaders)
app.use(express.json()) //proesa el body para leerlo con req.boy
app.use(logger)
app.use(express.urlencoded({extended:false})) //leer datos de urlEncoded de req.body

//importar metodos de squelize
import {Sequelize, DataTypes} from "sequelize"

//crear una instancia de sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '.db/datos.sqlite'
})

//definir modelos (tablas)
const Datos= sequelize.define('libros', {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING, 
    categoria: DataTypes.STRING
})

//sincronizar mis modelos con mi db(cear tablas en caso de que no existan) //sqlite viewer extension
sequelize.sync({alter:true}) //o alter:true


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.send("<h2>libros</h2>")
})


//las consultas son asincronicas, las que hace sequelizer
app.get("/libros", async (req, res) => {
    const libro = await Datos.findAll()
    res.json(libro)
})

app.post("/libros", async (req, res) => {
    const libro = await Datos.create(req.body)
    res.json(libro)
})

app.put("/libros/:id", async (req, res) => {
    const libro = await Datos.findByPk(req.params.id)

    if(libro){
        await user.update(req.body) //usuario vale los nuevos datos
        res.json(libro)

    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
    
})

app.delete("/libros/:id", async (req, res) => {
    const libro= await Datos.findByPk(req.params.id)
    if(libro) {
        await libro.destroy()
        res.json({msg: "libro eliminado correctamente"})

    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
})



app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en  ${fullDomain}`)
}) 
