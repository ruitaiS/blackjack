import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 1000
  }
})

const User = mongoose.model("users", userSchema)

export default User
