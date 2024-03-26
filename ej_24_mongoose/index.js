import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
console.clear();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//para el proyeto hay que exportar las conexiones de basde de datos.
const connect = async() => {
    const DB_USER="karinahnatova";
    const DB_PASS="Greo6789";
    const DATA_BASE="cei"
    const url=`mongodb+srv://${DB_USER}:${DB_PASS}@cei-valencia.sl8cxae.mongodb.net/${DATA_BASE}`
    await mongoose.connect(url)
    .then(()=> console.log("Conectado a MongoDB Atlas"))
    .catch((e)=> console.log("Error en la conexion", e))

}
connect();

const options= {
    collection: 'usuarios',
    strict: true, //solo almacena los elementos que estan registrados en el esquema
    collation: {
        locale: "es", //o en, ingles
        strength: 1 //fuerza del tipado al hacer la busqueda
    }

}

const alumnoSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    edad: Number,
    isAdmin: Boolean,
    hobbies: Array

}, options)

const Alumno = mongoose.model("Alumno", alumnoSchema)

app.get("/", async (req, res, next)=> {

    const result = await Alumno.find()
    res.json(result)
    res.json("EXISTO")

})

app.get("/nombre/:nombre/:edad", async (req, res, next)=> {
    const {nombre, edad} = req.params;
    
    //obtener los datos de todos los usuarios
    const result = await Alumno.find({nombre, edad}).select({edad:0}) //findone devuelve un objeto y findbyid un array
    res.json(result)

})

app.get("/usuarios/:id", async (req, res, next)=> {
    const {id} = req.params;
    //obtener los id de todos los usuarios
    const result = await Alumno.findById({id})
    res.json(result)

})

app.post("/usuarios", async(req, res, next) => {

    const {name, username, edad, isAdmin, hobbies} = req.body
    const newUsuario = new Alumno({
        name: name,
        username: username,
        edad: edad,
        isAdmin: isAdmin,
        hobbies: hobbies

    })
    //devolver el registro recien agregado
    await newUsuario.save()
    // res.json(newUsuario)

    //devolver el registro nuevo con todos
    const todosLosUsuarios = await Alumno.find()
    res.send(todosLosUsuarios)

    //hay que fijarse que en el thunderclient lo mando en forma de post no de get
})

app.put("/usuarios/:id", async(req, res, next) => {
    const {id} = req.params
    const {name, username} = req.body
    const alumnoEditado = await Alumno.findByIdAndUpdate(id, { name, username }, {new:true} )//nos va a devolver el usuario actualizado
    res.json(alumnoEditado)
})

app.delete("/usuarios/:id", async(req, res, next)=> {
    const {id} = req.params
    try {
        const alumno = await Alumno.findByIdAndDelete(id)
        res,json({
          alu: alumno,
          status: "ok",
          msg: "Alumno eliminado con éxito"
    })

    }catch (error) {
        res.json(error)
    }
    
})

app.get("/operadores", async(req, res, next)=> {
    const usuarios = await Alumno.find({edad: {$gt: 18, $lt: 65}}) // greater than y lower than, como un filtro
    const usersNotAdmin = await Alumno.find({isAdmin: {$ne: true}})
    const jugadoresDeFutbol = await Alumno.find({hobbies: {$in: ["tennis"]}})
    const usersConHobbies = await Alumno.find({hobbies: {$exists: true}})
    res.json(usersConHobbies)
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3000")
})