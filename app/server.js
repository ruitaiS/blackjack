import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth/index.js"
import bodyParser from "body-parser"
import mongoose from "mongoose"

const app = express()

app.use(express.json())
app.use(bodyParser())
app.use(cors())

app.use("/auth", authRoutes)

app.get("/", (request, response) => response.send("welcome to blackjack api"))

mongoose
  .connect(
    "mongodb+srv://blackjack:pDCD6BWZxbMJgN8i@cluster0.2hjrp.mongodb.net/blackjack?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    app.listen(4000, (res, req) => {
      console.log("app started at port 4000")
    })
  })

mongoose.set("useFindAndModify", false)
