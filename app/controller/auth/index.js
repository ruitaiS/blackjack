import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../../models/user.js"

export const jwtConfig = {
  secret: "dh342-0c23-gfrde-af14-d5432b432t",
  refreshTokenSecret: "gre241df3-gf3-45bf-9eae-gre35fdsads",
  expireTime: "30m",
  refreshTokenExpireTime: "30m"
}

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

      const accessToken = jwt.sign({ _id: newUser._id }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      })
      const refreshToken = jwt.sign({ _id: newUser._id }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime
      })

      const user = {
        id: newUser._id,
        username: newUser.username,
        balance: newUser.balance
      }
      newUser.save()

      res.status(200).json({ user, accessToken, refreshToken })
    }
    // if user exists error
    res.status(400).json({ message: "User already exists with that username" })
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

      const accessToken = jwt.sign({ _id: existingUser[0]._id }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      })
      const refreshToken = jwt.sign({ _id: existingUser[0]._id }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime
      })
      const user = {
        id: existingUser[0]._id,
        username: existingUser[0].username,
        balance: existingUser[0].balance
      }

      return res.status(200).json({ user, accessToken, refreshToken })
    }
  } catch (err) {
    return res.status(401).json({ message: "something went wrong" })
  }
}
