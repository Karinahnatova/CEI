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
// const Datos= sequelize.define('libros', {
//     titulo: DataTypes.STRING,
//     autor: DataTypes.STRING, 
//     categoria: DataTypes.STRING
// })

const libros = sequelize.define('libros', {
    libro: DataTypes.STRING,
    id_autor: DataTypes.INTEGER
})

const Autores= sequelize.define('autores', {
    autor: DataTypes.STRING,
    cant_libros: DataTypes.INTEGER
})

const categoria_libro= sequelize.define('categoria_libro', {
    id_categoria: DataTypes.INTEGER,
    id_libro: DataTypes.INTEGER
})

const Categorias= sequelize.define('categorias', {
    categoria: DataTypes.STRING
})

//sincronizar mis modelos con mi db(cear tablas en caso de que no existan) //sqlite viewer extension
//force true: elimina y recrea todas las talas en cada reinicio
sequelize.sync({alter:true}) //o alter:true, actualiza las columnas sin borrarlas


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
    const libro= await Datos.findByPk(req.params.id) //buscar por primary key
    if(libro) {
        const libroViejo = libro //guardamos en una contsante de libro viejo para no perder completamente el libro al borrarlo
        await libro.destroy()
        res.json({msg: "libro eliminado correctamente", data:libroViejo})

    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
})



app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en  ${fullDomain}`)
}) 
