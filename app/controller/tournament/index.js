import Tournament from "../../models/tournament.js"

export const createTournament = async (req, res) => {
  const { username, balance } = req.body
  try {
    const tournament = await new Tournament({
      players: [
        {
          username,
          balance
        }
      ]
    })

    tournament.save()

    res.status(201).json(tournament)
  } catch (err) {
    console.log(err)
  }
}

export const joinTournament = async (req, res) => {
  const { tournamentId } = req.params
  const { username, balance } = req.body

  try {
    const updatedTournament = await Tournament.findByIdAndUpdate(
      { _id: tournamentId },
      { $push: { players: { username, balance } } },
      { new: true }
    )

    res.status(200).json(updatedTournament)
  } catch (err) {
    console.log(err)
  }
}

export const updateTournamentWithPlayerHands = async (req, res) => {
  const { tournamentId } = req.params
  const { hands } = req.body

  try {
    const updatedTournament = await Tournament.findByIdAndUpdate(
      { _id: tournamentId },
      { hands },
      { new: true }
    )

    res.status(200).json(updateTournamentWithPlayerHands)
  } catch (err) {
    console.log(err)
  }
}

export const updateTournamentWithWinner = async (req, res) => {
  const { tournamentId } = req.params
  const { winner } = req.body

  try {
    const updatedTournament = await Tournament.findByIdAndUpdate(
      { _id: tournamentId },
      { winner },
      { new: true }
    )

    res.status(200).json(updatedTournament)
  } catch (err) {
    console.log(err)
  }
}
