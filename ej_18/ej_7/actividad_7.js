
import { timelog } from "./middlewares/logger.js";
import express from "express";
import {PORT, domain} from "./config.js";
import router from "./routes/index.routes.js"

const app = express();
console.clear();

const fulldomain = `${domain}:${PORT}`

app.use(timelog)
//express lo utiliza para recibir el body como json en thunderclient
app.use(express.json())

app.use("/API/v1/", router)

// const fulldomain = `${domain}:${PORT}`

app.listen(PORT, ()=> {
    console.log(`Server is runnin on ${fulldomain}`);
});