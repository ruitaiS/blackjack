import express from "express"
import { getNewDeck } from "../../controller/deck/index.js"

const router = express.Router()

router.get("/:numOfDecks", getNewDeck)

export default router
