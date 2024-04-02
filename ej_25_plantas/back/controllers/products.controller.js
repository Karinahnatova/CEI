import mongoose from "mongoose";

const connect = async() => {
    const DB_USER="karinahnatova";
    const DB_PASS="Greo6789";
    const DATA_BASE="verdecarlos"
    const url=`mongodb+srv://${DB_USER}:${DB_PASS}@cei-valencia.sl8cxae.mongodb.net/${DATA_BASE}`
    await mongoose.connect(url)
    .then(()=> console.log("Conectado a MongoDB Atlas"))
    .catch((e)=> console.log("Error en la conexion", e))

}
connect();

const options= {
    collection: 'productos',
    strict: true, //solo almacena los elementos que estan registrados en el esquema
    collation: {
        locale: "es", //o en, ingles
        strength: 1 //fuerza del tipado al hacer la busqueda
    }

}
//los esquemas los ponemos en controllers
const productSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    cantidad: Number,
    cantidad_vendidos: Number,
    precio: Number,
    id_subcategoria: Number,
    edad: Number,
    raza: String,
    color: String

}, options)

const Product = mongoose.model("Producto", productSchema)

export const getAllProducts = async (req, res) => {
    try {
        console.log()
        const result = await Product.find()
        res.json(result)

    }catch (error) {
        res.status(400).json('Error')
    }
}

export const getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const result = await Product.findById(id)
        res.json(result)

    }catch (error) {
        res.status(400).json('Error')

    }
}

export const addProduct = async (req, res) => {
    try {
        const {nombre, descripcion, cantidad, cantidad_vendidos, precio, id_subcategoria, edad, raza, color} = req.body
        const newProduct = new Product({
            nombre,
            descripcion,
            cantidad,
            cantidad_vendidos,
            precio,
            id_subcategoria,
            edad,
            raza,
            color

        })
        await newProduct.save()

        const todosLosProductos = await Product.find()
        res.send(todosLosProductos)
        res.status(200).json('Añadiendo producto')

    }catch (error) {
        res.status(400).json('Error')

    }
}

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params
        const {nombre, descripcion, cantidad, cantidad_vendidos, precio, id_subcategoria, edad, raza, color} = req.body
        const productoEditado = await Product.findByIdAndUpdate(id, { nombre, descripcion, cantidad, cantidad_vendidos, precio, id_subcategoria, edad, raza, color }, {new:true} )
        res.json(productoEditado)
        res.status(200).json('Editando producto')

    }catch (error) {
        res.status(400).json('Error')

    }
}

export const removeProduct = async (req, res) => {
    try {
        const {id} = req.params
        const producto = Product.findByIdAndDelete(id)
        res.json({
            producto,
            status: "ok",
            msg: "Alumno eliminado con éxito"
      })

    }catch (error) {
        res.status(400).json('Error')

    }
}
