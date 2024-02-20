// const express = require("express")

import express, { json } from "express"
import PORT from "./config.js"
import { timeLog } from "./middlewares/logger.js";

// const PORT = 3000

//mostrar diferentes tipos de datos en respuesta:
//-response en json
//-response en xml
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

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})
