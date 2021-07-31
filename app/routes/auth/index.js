import express from "express"
import { signUp, signIn } from "../../controller/auth/index.js"

const router = express.Router()

router.post("/register", signUp)
router.post("/login", signIn)

export default router
