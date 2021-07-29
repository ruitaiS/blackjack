import mongoose from "mongoose"

const tournamentSchema = mongoose.Schema({
  players: [
    {
      _id: false,
      username: { type: String },
      balance: { type: Number }
    }
  ],
  winner: { type: String, default: null }
  // hands: [
  //   [
  //     {
  //       _id: false,
  //       username: { type: String },
  //       hand: { type: String },
  //       won: { type: Boolean }
  //     }
  //   ]
  // ]
})

const Tournament = mongoose.model("tournaments", tournamentSchema)

export default Tournament
