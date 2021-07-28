import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../../models/user.js"

export const signUp = async (req, res) => {
  const { username, password } = req.body

  try {
    // find existing user
    const existingUser = await User.find({ username })

    // if user doesn't exist creat new user
    if (!existingUser.length) {
      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = await User.create({
        username,
        password: hashedPassword
      })

      // create token
      const token = jwt.sign({ username: newUser.username, id: newUser._id }, "test1234")

      res.status(200).json({ token })
    }
    res.status(400).json({ message: "Something wrong with username/password" })
  } catch (err) {
    res.status(400).json({ message: "Something wrong with username/password" })
  }
}

export const signIn = async (req, res) => {
  const { username, password } = req.body

  try {
    // find existing user
    const existingUser = await User.find({ username })
    if (!existingUser.length) {
      return res.status(400).json({ message: "user doesn't exist" })
    } else {
      // compare password to see if it's valid
      const isValid = await bcrypt.compare(password, existingUser[0].password)
      if (!isValid) return res.status(401).json({ message: "your password doesn't match" })

      // create token
      const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, "test1234")

      return res.status(200).json({ token })
    }
  } catch (err) {
    return res.status(401).json({ message: "something went wrong" })
  }
}
