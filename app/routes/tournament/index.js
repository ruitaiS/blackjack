import express from "express"
import {
  createTournament,
  joinTournament,
  updateTournamentWithWinner
} from "../../controller/tournament/index.js"

const router = express.Router()

router.post("/", createTournament)
router.post("/:tournamentId", joinTournament)
router.patch("/:tournamentId", updateTournamentWithWinner)

export default router
