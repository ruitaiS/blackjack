import express from "express"
import {
  createTournament,
  joinTournament,
  updateTournamentWithWinner,
  updateTournamentWithPlayerHands
} from "../../controller/tournament/index.js"

const router = express.Router()

router.post("/", createTournament)
router.post("/:tournamentId", joinTournament)
router.patch("/:tournamentId/hands", updateTournamentWithPlayerHands)
router.patch("/:tournamentId/winner", updateTournamentWithWinner)

export default router
