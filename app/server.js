import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"

// socket io
import { Server } from "socket.io"
import { createServer } from "http"

// route imports
import authRoutes from "./routes/auth/index.js"
import deckRoutes from "./routes/deck/index.js"
import tournamentRoutes from "./routes/tournament/index.js"

dotenv.config()
const app = express()

app.use(express.json())
app.use(bodyParser())
app.use(cors())

app.use("/deck", deckRoutes)
app.use("/auth", authRoutes)
app.use("/tournament", tournamentRoutes)

app.get("/", (request, response) => response.send("welcome to blackjack api"))

mongoose
  .connect(
    "mongodb+srv://blackjack:pDCD6BWZxbMJgN8i@cluster0.2hjrp.mongodb.net/blackjack?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    app.listen(4000, (res, req) => {
      console.log("app started at port 4000")
    })
  })

mongoose.set("useFindAndModify", false)
