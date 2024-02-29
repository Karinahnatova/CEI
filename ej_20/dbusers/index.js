import express from "express";
import cors from 'cors'
import {PORT, fullDomain} from './config/config.js'

const app = express()
console.clear()

//middlewares
app.use(cors())
app.use(express.json()) //leeer datos json de re.body
app.use(express.urlencoded({extended:false})) //leer datos de urlEncoded de req.body


//importar metodos de squelize
import {Sequelize, DataTypes} from "sequelize"


//crear una instancia de sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '.db/datos.sqlite'
})

//definir modelos (tablas)
const Users = sequelize.define('usuarios', {
    email: DataTypes.STRING, //DATE, INTEGER, NUMBER, BOOLEAN...
    password: DataTypes.STRING, 
    edad: DataTypes.INTEGER
})

//sincronizar mis modelos con mi db(cear tablas en caso de que no existan) //sqlite viewer extension
sequelize.sync({alter:true}) //o alter:true



app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.send("<h2>hola</h2>")
})


//las consultas son asincronicas, las que hace sequelizer
app.get("/users", async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
})

app.post("/users", async (req, res) => {
    const user = await Users.create(req.body)
    res.json(user)
})

app.put("/users/:id", async (req, res) => {
    const user = await Users.findByPk(req.params.id)

    if(user){
        await user.update(req.body) //usuario vale los nuevos datos
        res.json(user)

    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
    
})

app.delete("/users/:id", async (req, res) => {
    const user= await Users.findByPk(req.params.id)
    if(user) {
        await user.destroy()
        res.json({msg: "usuario eliminado correctamente"})

    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
})

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en  ${fullDomain}`)
}) 
