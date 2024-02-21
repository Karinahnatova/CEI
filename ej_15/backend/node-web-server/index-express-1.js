const express = require("express");// ponemos require("express") porque así lo importamos en en json ya que trabajamos con js, ponemos "type":"module" en json para que funcione (estamos usando commonJS)

const app = express();
console.clear();

// EJEMPLOS DE RUTAS CON EXPRESS

app.get("/", (req, res)=>{
    res.send("Bienvenidos a ExpressJS!")
    console.log("El usuario entró al home")
});

app.get("/perfil", (req, res)=>{
    res.send("Bienvenidos a Perfil")
    console.log("El usuario entró a perfil")
});

//app.get: metodos de xpress para leer consultas, tambien podemos hacer post
//LOS METODOS MAS COMUNES SON: GET (OBTENER INFO, envia info a través de la url), POST(GUARDAR INFO,  crear elementos, formularios con mucha info), PUT(ACTUALIZAR INFO), DELETE(BORRAR INFO), OPTIONS(SETEAR INFO)

app.get("/users", (req, res)=> {
    res.send("Seccion de ususarios con post")
    console.log("El usuario realizo un GET  a users")
});


// metodo all habilita cualquier metodo anterior get o post, los dos
app.all("/metodos", (req, res)=> {
    res.send("<h3>soporta todos los metodos (POST, PUT, DELETE, GET)</h3>")
    console.log("El usuario realizo un all a metodos");
});

app.route("/Libros")
.get((req, res) => {
    res.send("Obtener libros")

})
.post((req, res) => {
    res.send("Obtener un nuevo libro")

}).put((req, res) => {
    res.send("Obtener libro x")

})


app.get("/jsonuser", (req,res)=> {
    res.status(200)
    res.type("json")
    res.json({nombre: "Sofia", id: 5, edad: 20})

    //res.status(404).json({message: "Not found"}): se puede concatenar todo en uno
})

app.get("/jsonuser", (req,res)=> {
    res.json({nombre: "Sofia", id: 5, edad: 20})
})

//si lo ponemos al principio,no encontrara ninguna ruta
app.get("*", (req, res) => {
    res.send("<h3>404 not found</h3>")
    console.log("usuario accede a ruta inexistente")
})


app.listen(8080, ()=> {
    console.log("Servidor express corriendo en puerto 8080");
});