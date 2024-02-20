//EJEMPLOS DE MIDDLEWARES EN EXPRESS

const express = require("express"); //importarr via js la libreria express

const app = express(); //creamos la variable app de express

app.get("/ejemplo/a", (req, res, next)=> {
    console.log("La respuesta sera enviada luego del timeout");
    setTimeout(()=> {
        console.log("timeout de 2 seg")
        next();
    }, 2000)
    
}, function(req, res){
    console.log("Segunda funcion")
    res.send("Llegaste a la segunda funcion")
});

//enviar info al usuario mientras el server sigue funcionando
app.get("/ejemplo/b", (req, res, next)=> {
    console.log("la respuesta sera enviada despues de la funcion ")
    next()
    setTimeout(()=> {
        console.log("timeout de 2 seg")
    }, 2000);
}, (req, res)=> {
    res.send("llegaste a la 2a funcion")
})

//crear una promesa antes de enviar datos
app.get("/ejemplo/c", (req, res, next)=> {
    console.log("la respuesta sera enviada una vez cumplida la promesa ")

    new Promise((resolve, reject) => {
       setTimeout(()=> {
        console.log("timeout de 2 s")
        resolve()
       }, 2000)
    }).then(()=> {
        //usamos then para llamar a next cuando se resuelva la promesa
        next()
    })

}, (req, res)=> {
    res.send("llegaste a la 2a funcion")
})







app.listen(8080, ()=> {
    console.log("servidor corriendo en 8080")
})
