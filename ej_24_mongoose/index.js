import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
console.clear();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const connect = async() => {
    const USER="karinahnatova";
    const PASS="Greo6789";
    const DB="cei"
    const url=`mongodb+srv://${USER}:${PASS}@cei-valencia.sl8cxae.mongodb.net/${DB}`
    await mongoose.connect(url)
    .then(()=> console.log("Conectado a MongoDB Atlas"))
    .catch((e)=> console.log("Error en la conexion", e))

}
connect();

const options= {
    collection: 'usuarios'
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

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3000")
})