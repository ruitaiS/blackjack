import Tournament from "../../models/tournament.js"
import User from "../../models/user.js"

export const createTournament = async (req, res) => {
  const { username, balance, numOfDecks } = req.body
  try {
    const tournament = new Tournament({
      players: [{ username, balance }],
      numOfDecks
    })

    tournament.save()

    res.status(200).json(tournament)
  } catch (err) {
    console.log(err)
  }
}

export const joinTournament = async (req, res) => {
  const { tournamentId } = req.params
  const { username, balance } = req.body

  try {
    await Tournament.findByIdAndUpdate(
      { _id: tournamentId },
      { $push: { players: { username, balance } } },
      { new: true },
      (err, tournament) => {
        if (err) return res.status(400)
        return res.status(200)
      }
    )
  } catch (err) {
    console.log(err)
  }
}

export const updateTournamentWithPlayerHands = async (req, res) => {
  const { tournamentId } = req.params
  const { username, balance, hand } = req.body

  try {
    await Tournament.findByIdAndUpdate(
      { _id: tournamentId },
      { $push: { hands: { username, balance, hand } } },
      { new: true },
      (err, tournament) => {
        if (err) return res.status(400)
        return res.status(200)
      }
    )
  } catch (err) {
    console.log(err)
  }
}

export const updateTournamentWithWinner = async (req, res) => {
  const { tournamentId } = req.params
  const { userId } = req.body

  try {
    const winner = await User.findOne({ _id: userId })

    await Tournament.findByIdAndUpdate(
      { _id: tournamentId },
      { winner },
      { new: true },
      (err, tournament) => {
        if (err) return res.status(400)
        return res.status(200)
      }
    )
  } catch (err) {
    console.log(err)
  }
}
