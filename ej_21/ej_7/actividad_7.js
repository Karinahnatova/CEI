
import { timelog } from "./middlewares/logger.js";
import express from "express";
import {PORT, domain} from "./config.js";
import router from "./routes/index.routes.js"

const app = express();
console.clear();

const fulldomain = `${domain}:${PORT}`

app.use(timelog)
app.use(express.json())
app.use("/API/v1/", router)
app.get("/", (req, res)=> {
    res.setHeader("Content-type", "text/html")

    const landingHTML = `
    <h1>BIENVENIDOS A NUESTRA API DE HTML</h1>
    `
    res.send(landingHTML)
})

app.listen(PORT, ()=> {
    console.log(`Server is runnin on ${fulldomain}`);
});