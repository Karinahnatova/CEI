import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controllers.js";
import { verifyToken } from "../helpers/utils.js";
import  verify  from "jsonwebtoken";

export const router = Router()

//rutas de Auth
router.post("/auth/login", loginUser)
router.post("/auth/register", registerUser)

//rutas de mi APP
router.get("/panel-de-control", verifyToken, (req, res) => {
    res.json({msg: "entraste a una seccion privada", payload:req.stuffff})
})

router.post("/provado", verifyToken, (req,res) => {

})







export default router;