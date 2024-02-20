const express = require("express")

const app = express()

//EJEMPLOS DE MIDDLEWARES EN EXPRESS

const PORT = 3000
console.clear()

// Que sin los Middleware
//- Son funciones que se ejecutan en medi de un proceso, en este caso en medio de la peticion y la respuesta.
//- Siempre se ejecutan en el orden en el que se declaran.
//- Se pueden usar para validar datos, modificar o procesar la petición y la respuesta.

function timeLog(req, res, next) {
    console.log("Time:", Date.now())
    next()
}

app.use( timeLog )

// app.use( function timeLog(req, res, next) {
//     console.log("Time:", Date.now())
//     next()
// } )




//EJEMPLO 2 USO DE MULTIPLES MIDDLEWARES

const middleware1 = function (req, res, next) {
    console.log("Registro guardado 1")
    next()
}

const middleware2 = function (req, res, next) {
    console.log("Registro guardado 2")
    next()
}

app.use(middleware1, middleware2)


//EJEMPLO 3: OBTENER INFO DEL REQUEST

app.use("/admin", (req,res,next)=>{
    // console.log(req)
    console.log("Request URL:", req.originalUrl)
    next()

}, (req, res, next) => {
    console.log("REQUEST TYPE:", req.method)
    next()
})





app.get("/", (req, res)=> {
    res.send("HOLA")
})



app.listen(PORT, ()=> {
    console.log(`server corriendo en puerto ${PORT}`)
})