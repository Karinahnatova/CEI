import { Router } from "express";
import multer from "multer";
import { storage } from "../middlewares/multer";

const router = Router

const upload = multer({ storage: storage })

export default router