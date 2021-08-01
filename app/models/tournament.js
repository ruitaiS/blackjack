import mongoose from "mongoose"

const tournamentSchema = mongoose.Schema({
  players: [
    {
      _id: false,
      username: { type: String },
      balance: { type: Number },
      currentHand: [
        {
          _id: false,
          suite: { type: String },
          rank: { type: String }
        }
      ]
    }
  ],
  hands: [
    {
      _id: false,
      username: { type: String },
      balance: { type: Number },
      hand: [{ rank: { type: String }, suit: { type: String } }]
    }
  ],
  winner: { type: String, default: null },
  numOfDecks: { type: Number }
})

const Tournament = mongoose.model("tournaments", tournamentSchema)

export default Tournament
