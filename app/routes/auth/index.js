import express from "express"
import { signUp, signIn } from "../../controller/auth/index.js"

// router.get()
// router.patch()
// router.delete()
const router = express.Router()

router.post("/signup", signUp)
router.post("/signin", signIn)

export default router
