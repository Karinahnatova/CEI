import express from "express"
import cors from "cors"
import router from "./routes/index.routes";
import mongoose from "mongoose";

import { logger } from "./middlewares/logger";
import { fullDomain, PORT } from "./config/config";


const app = express()
console.clear()

app.use(cors())
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/API/v1/", router)
app.get("/", (req, res)=> {
    res.setHeader("Content-type", "text/html")

    const landingHTML = `
    <h1>BIENVENIDOS A NUESTRA API DE HTML</h1>
    `
    res.send(landingHTML)
})

app.listen(PORT, ()=> {
    console.log(`Server is runnin on ${fullDomain}`);
});