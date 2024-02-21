// const express = require("express")

import express, { json } from "express"
import PORT from "./config.js"
import { timeLog } from "./middlewares/logger.js";
import * as xmlbuilder from 'xmlbuilder'

// const PORT = 3000

//mostrar diferentes tipos de datos en respuesta:
//-response en json
//-response en xml: se descarga la extendion: npm i xmlbuilder
//-response yml (no la utilizaremos)
//-response en html

const app = express();
console.clear()

const datos = {
    id: 23,
    name: "Maria Soledad",
    email: "Maria Soledad@gmail.com"
}


app.use(timeLog)

app.get("/resp-json", (req, res) => {
    //convertir mi objeto json a un string
    const jsonData = JSON.stringify(datos) 
    res.setHeader("Content-Type", "application/json")
    res.send(jsonData) //.end igual que send, aunque end termina las consultas
})


app.get("/resp-xml", (req, res) => {

    const xml = xmlbuilder.create('datos')
    .ele('id', datos.id)
    .up() //para salir de la etiqueta
    .ele('name', datos.name)
    .up()
    .ele('email', datos.email)
    .end({pretty:true}); //para hacerlo más bonito, separaciones...
    res.header('Content-Type', 'application/xml')
    res.send(xml)

})

app.get("/resp-html", (rep, res) => { //si ponemos function, quitariamos el arrow y creariamos un nombre de funcion
    const html= `<!DOCTYPE html>
    <html>
    <h1>hola</h1>
    </html>`; //se puede poner entre "" o ``.
    res.header("Content-Type", "text/html");
    res.send(html);

});

app.get("/usuarios/:idusuario/:nombre", (req, res)=> {
    console.log(req)
    //recibimos parametros de la url
    const idUsuario=req.params.nombre
    const nombre=req.params.nombre
    const jsonData = JSON.stringify(datos) 
    res.setHeader("Content-Type", "application/json")
    res.send(jsonData) 

})

app.get("/usuarios", (req, res)=> {
    const jsonData = JSON.stringify(datos) 
    res.setHeader("Content-Type", "application/json")
    res.send(jsonData) 

})

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});
